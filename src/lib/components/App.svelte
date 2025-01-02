<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { Tween } from 'svelte/motion';
  import Scene from './Scene.svelte';
	// import { onDestroy } from 'svelte';
  import { onMount } from 'svelte';
  
// Arreglo de configuraciones
const configurations = [
    { hypar: 'Pabellón Oslo', mantos: 3, vertexX: 22, vertexY: 14, vertexZ: 26 },
    { hypar: 'Casino de la Selva', mantos: 5, vertexX: 30, vertexY: 10, vertexZ: 27 },
    { hypar: 'San Antonio de las Huertas', mantos: 4, vertexX: 30, vertexY: 14, vertexZ: 43 },
    { hypar: 'Manantiales', mantos: 8, vertexX: 37, vertexY: 9, vertexZ: 26 }
  ];

  // Crear objetos Spring para valores animados
  const mantos = new Tween(3, { duration: 2000 });
  const vertexX = new Tween(22, { duration: 2000 });
  const vertexY = new Tween(14, { duration: 2000 });
  const vertexZ = new Tween(26, { duration: 2000 });

  let segments = $state(60);
  let dmantos = $state(mantos);
  let dvertexX = $state(vertexX);
  let dvertexY = $state(vertexY);
  let dvertexZ = $state(vertexZ);

  // Actualizar valores cíclicamente
  let currentIndex = $state(0);
  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % configurations.length;
      const currentConfig = configurations[currentIndex];
      mantos.target = currentConfig.mantos;
      vertexX.target = currentConfig.vertexX;
      vertexY.target = currentConfig.vertexY;
      vertexZ.target = currentConfig.vertexZ;
    }, 5000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar componente
  });
</script>

<section class='fixed text-sm flex flex-col p-2 m-2 mt-12 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
  <div class="flex justify-between items-center mb-4">
    <h5 class="my-0 py-0"><strong>Hypar</strong></h5>
    <!-- <button 
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onclick={togglePlay}
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button> -->
  </div>

  <div class="mb-2">
    <span class="font-medium">
      {configurations[currentIndex].hypar}
    </span>
  </div>
  <!-- {#snippet valores(identif: string, config: any, min: number, max: number, label1: string, onChange: (event: Event) => void)} -->
    <div class='flex flex-row justify-between items-center'>
      <!-- <label for='{identif}' class="w-[100px]">{label1}&nbsp;</label>
      <input
        id='{identif}'
        type='range'
        bind:value={config}
        min={min}
        max={max}
        oninput={onChange}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
      <label for='{identif}' class='w-8 text-right'>{config.toFixed(1)}</label> -->
      <label for='rango-mantos' class="w-[100px]">Mantos&nbsp;</label>
      <input
        id='rango-mantos'
        type='range'
        bind:value={mantos.target}
        min=3
        max=10
        oninput={(e) => mantos.target = +(e.target as HTMLInputElement).value}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
      <label for='rango-mantos' class='w-8 text-right'>{mantos.target.toFixed(1)}</label>
    </div>
  <!-- {/snippet}
  {@render valores('rango-mantos', mantos.target, 3, 10, 'Mantos', (e) => mantos.target = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexX', vertexX.target, 3, 50, 'Vértice X', (e) => vertexX.target = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexY', vertexY.target, 3, 50, 'Vértice Y', (e) => vertexY.target = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexZ', vertexZ.target, 3, 50, 'Vértice Z', (e) => vertexZ.target = +(e.target as HTMLInputElement).value)}
  {@render valores('segments-range', segments, 4, 300, 'Segmentos', (e) => segments = +(e.target as HTMLInputElement).value)} -->
</section>

<!-- <Canvas>
  <Scene {...configs} />
</Canvas> -->
<Canvas>
  <Scene mantos={dmantos} vertexX={dvertexX} vertexY={dvertexY} vertexZ={dvertexZ} {segments} />
</Canvas>

<style lang="postcss">
  :global(html) {
    font-family: 'Trebuchet MS', sans-serif;
  }
</style>