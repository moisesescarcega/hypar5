<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  import { Tween } from 'svelte/motion';
  import { onDestroy } from 'svelte';

  const configurations = [
    { hypar: 'Pabellón Oslo', mantos: 3, vertexX: 22, vertexY: 14, vertexZ: 26 },
    { hypar: 'Casino de la Selva', mantos: 5, vertexX: 30, vertexY: 10, vertexZ: 27 },
    { hypar: 'San Antonio de las Huertas', mantos: 4, vertexX: 30, vertexY: 14, vertexZ: 43 },
    { hypar: 'Manantiales', mantos: 8, vertexX: 37, vertexY: 9, vertexZ: 26 }
  ];

  const tweenedValues = new Tween({
    mantos: configurations[0].mantos,
    vertexX: configurations[0].vertexX,
    vertexY: configurations[0].vertexY,
    vertexZ: configurations[0].vertexZ
  }, {
    duration: 150
  });

  let configs = $derived({
    ...tweenedValues.current
  });

  let segments = $state(60);
  let currentIndex = $state(0);
  let isPlaying = $state(false);
  let intervalId: number;

  async function animateToNext() {
    currentIndex = (currentIndex + 1) % configurations.length;
    const nextConfig = configurations[currentIndex];
    
    await tweenedValues.set({
      mantos: nextConfig.mantos,
      vertexX: nextConfig.vertexX,
      vertexY: nextConfig.vertexY,
      vertexZ: nextConfig.vertexZ
    });
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      intervalId = setInterval(animateToNext, 5000);
    } else {
      clearInterval(intervalId);
    }
  }

  function updateValue(key: string, value: number) {
    if (!isPlaying) {
      tweenedValues.set({
        ...tweenedValues.current,
        [key]: value
      });
    }
  }

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<section class='fixed text-sm flex flex-col p-2 m-2 mt-12 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
  <div class="flex justify-between items-center mb-2">
    <h5 class="my-0 py-0"><strong>Hypar</strong></h5>
    <button 
      class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      onclick={togglePlay}
    >
      {isPlaying ? 'Stop' : 'Play'}
    </button>
  </div>
  
  {#if isPlaying}
    <div class="mb-2 text-sm font-medium">{configurations[currentIndex].hypar}</div>
  {/if}

  {#snippet valores(identif: string, config: any, min: number, max: number, label1: string, key: string)}
    <div class='flex flex-row justify-between items-center'>
      <label for='{identif}' class="w-[100px]">{label1}&nbsp;</label>
      <input
        id='{identif}'
        type='range'
        value={config}
        min={min}
        max={max}
        onchange={(e) => updateValue(key, +(e.target as HTMLInputElement).value)}
        disabled={isPlaying}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50'
      />
      <label for='{identif}' class='w-8 text-right'>{Math.round(config)}</label>
    </div>
  {/snippet}

  {@render valores('rango-mantos', configs.mantos, 3, 10, 'Mantos', 'mantos')}
  {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'Vértice X', 'vertexX')}
  {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Vértice Y', 'vertexY')}
  {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Vértice Z', 'vertexZ')}
  <!-- {@render valores('segments-range', configs.segments, 4, 300, 'Segmentos', 'segments')} -->

  <div class='flex flex-row justify-between items-center'>
    <label for='rango-segmentos' class="w-[100px]">Segmentos&nbsp;</label>
    <input
      id='rango-segmentos'
      type='range'
      bind:value={segments}
      min=4
      max=300
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50'
    />
    <label for='rango-segmentos' class='w-8 text-right'>{segments}</label>
  </div>
</section>

<Canvas>
  <Scene {...configs} segments={segments} />
</Canvas>

<style lang="postcss">
  :global(html) {
 font-family: 'Trebuchet MS', sans-serif;
  }
 </style>