<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { Tween } from 'svelte/motion';
  import { onDestroy } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import Scene from './Scene.svelte';

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
    duration: 240,
    easing: cubicOut
  });

  let configs = $derived({
    ...tweenedValues.current
  });

  let segments = $state(60);
  let currentIndex = $state(0);
  let isPlaying = $state(false);
  let showRuled = $state(true);
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

  function toogleRuled() {
    showRuled = !showRuled;
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
  <h5 class="my-0 py-0"><strong>Hypar geometry of concrete shells</strong></h5>
  <div class="flex flex-row w-auto space-x-2 my-2">
    <button 
      class="rounded-md border border-slate-300 py-1 px-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800 active:border-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full" 
      type="button"
      onclick={togglePlay}
    >
    {isPlaying ? 'Modify' : 'Play'}
    </button>
    <button 
      class="rounded-md border border-slate-300 py-1 px-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800 active:border-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full" 
      type="button"
      onclick={toogleRuled}
    >
    {showRuled ? 'Solid Surface' : 'Ruled Surface'}
    </button>
  </div>
  
  {#if isPlaying}
    <div class="mb-2 text-sm font-bold">{configurations[currentIndex].hypar}</div>
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
        oninput={(e) => updateValue(key, +(e.target as HTMLInputElement).value)}
        disabled={isPlaying}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50'
      />
      <label for='{identif}' class='w-8 text-right'>{Math.round(config)}</label>
    </div>
  {/snippet}

  {@render valores('rango-mantos', configs.mantos, 3, 10, 'Shells', 'mantos')}
  {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'X vertex', 'vertexX')}
  {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Y vertex', 'vertexY')}
  {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Z vertex', 'vertexZ')}

  {#if showRuled}
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
  {/if}
</section>

<Canvas>
  <Scene {...configs} {segments} {showRuled} />
</Canvas>

<style lang="postcss">
  :global(html) {
 font-family: 'Trebuchet MS', sans-serif;
  }
 </style>