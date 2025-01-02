<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { spring } from 'svelte/motion';
  import Scene from './Scene.svelte';
	import { onDestroy } from 'svelte';
  
  // const configs = $state({
  //   mantos: 3,
  //   vertexX: 11,
  //   vertexY: 7,
  //   vertexZ: 13,
  //   segments: 45
  // });

    // Definimos las configuraciones
    const configurations = [
    { hypar: 'Pabellón Oslo', mantos: 3, vertexX: 22, vertexY: 14, vertexZ: 26 },
    { hypar: 'Casino de la Selva', mantos: 5, vertexX: 30, vertexY: 10, vertexZ: 27 },
    { hypar: 'San Antonio de las Huertas', mantos: 4, vertexX: 30, vertexY: 14, vertexZ: 43 },
    { hypar: 'Manantiales', mantos: 8, vertexX: 37, vertexY: 9, vertexZ: 26 }
  ];

  // Estado inicial y controles de animación
  let currentIndex = $state(0);
  let isPlaying = $state(false);
  let intervalId: number;
  
  // Creamos springs para cada valor que queremos animar
  const animatedValues = spring(
    { 
      mantos: configurations[0].mantos,
      vertexX: configurations[0].vertexX,
      vertexY: configurations[0].vertexY,
      vertexZ: configurations[0].vertexZ
    }, 
    {
      stiffness: 0.04,
      damping: 0.9
    }
  );

  // Estado derivado que combina los valores animados con segments
  const configs = $derived({
    mantos: Math.round($animatedValues.mantos),
    vertexX: $animatedValues.vertexX,
    vertexY: $animatedValues.vertexY,
    vertexZ: $animatedValues.vertexZ,
    segments: 45
  });

  // Función para actualizar a la siguiente configuración
  function updateConfiguration() {
    currentIndex = (currentIndex + 1) % configurations.length;
    const nextConfig = configurations[currentIndex];
    animatedValues.set({
      mantos: nextConfig.mantos,
      vertexX: nextConfig.vertexX,
      vertexY: nextConfig.vertexY,
      vertexZ: nextConfig.vertexZ
    });
  }

  // Función para controlar la reproducción
  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      // Iniciamos el intervalo
      intervalId = setInterval(updateConfiguration, 8000);
    } else {
      // Detenemos el intervalo
      clearInterval(intervalId);
    }
  }

  // Limpiamos el intervalo cuando el componente se desmonta
  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<section class='fixed text-sm flex flex-col p-2 m-2 mt-12 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
  <div class="flex justify-between items-center mb-4">
    <h5 class="my-0 py-0"><strong>Hypar</strong></h5>
    <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onclick={togglePlay}
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  </div>

  <div class="mb-2">
    <span class="font-medium">
      {configurations[currentIndex].hypar}
    </span>
  </div>
  {#snippet valores(identif: string, config: any, min: number, max: number, label1: string, onChange: (event: Event) => void)}
    <div class='flex flex-row justify-between items-center'>
      <label for='{identif}' class="w-[100px]">{label1}&nbsp;</label>
      <input
        id='{identif}'
        type='range'
        value={config}
        min={min}
        max={max}
        oninput={onChange}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
      <label for='{identif}' class='w-8 text-right'>{config.toFixed(1)}</label>
    </div>
  {/snippet}
  {@render valores('rango-mantos', configs.mantos, 3, 10, 'Mantos', (e) => configs.mantos = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'Vértice X', (e) => configs.vertexX = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Vértice Y', (e) => configs.vertexY = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Vértice Z', (e) => configs.vertexZ = +(e.target as HTMLInputElement).value)}
  {@render valores('segments-range', configs.segments, 4, 300, 'Segmentos', (e) => configs.segments = +(e.target as HTMLInputElement).value)}
</section>

<Canvas>
  <Scene {...configs} />
</Canvas>

<style lang="postcss">
  :global(html) {
    font-family: 'Trebuchet MS', sans-serif;
  }
</style>