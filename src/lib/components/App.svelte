<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { Tween } from 'svelte/motion';
  import { onDestroy, onMount } from 'svelte';
  import Scene from './Scene.svelte';

  type HyparConfig = {
    hypar: string;
    mantos: number;
    vertexX: number;
    vertexY: number;
    vertexZ: number;
    clipV1: number;
    clipV2: number;
    offset: number;
  }

  let configurations = $state<HyparConfig[]>([]);
  let segments = $state(60);
  let currentIndex = $state(0);
  let isPlaying = $state(false);
  let showRuled = $state(true);
  let intervalId: number | undefined = undefined;
  
  let tweenConfigs = {
    duration: () => isPlaying ? 600 : 0,
    easing: undefined
  };

  const tweenedValues = new Tween({
    mantos: 3,
    vertexX: 22,
    vertexY: 14,
    vertexZ: 26,
    clipV1: 16,
    clipV2: 5,
    offset: 0
  }, tweenConfigs);

  let configs = $derived({
    ...tweenedValues.current
  });

  onMount(async () => {
    try {
      const response = await fetch('/hypar-configurations.json');
      const data = await response.json();
      configurations = data.configurations;
      
      if (configurations.length > 0) {
        const initial = configurations[0];
        tweenedValues.set({
          mantos: initial.mantos,
          vertexX: initial.vertexX,
          vertexY: initial.vertexY,
          vertexZ: initial.vertexZ,
          clipV1: initial.clipV1,
          clipV2: initial.clipV2,
          offset: initial.offset
        });
        togglePlay();
      }
    } catch (error) {
      console.error('Error loading configurations:', error);
    }
  });

  function animateToNext() {
    if (configurations.length === 0) return;
    currentIndex = (currentIndex + 1) % configurations.length;
    const nextConfig = configurations[currentIndex];
    
    tweenedValues.set({
      mantos: nextConfig.mantos,
      vertexX: nextConfig.vertexX,
      vertexY: nextConfig.vertexY,
      vertexZ: nextConfig.vertexZ,
      clipV1: nextConfig.clipV1,
      clipV2: nextConfig.clipV2,
      offset: nextConfig.offset
    });
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying && !intervalId) {
      intervalId = setInterval(animateToNext, 5000);
    } else if (!isPlaying && intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
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
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  });
</script>

<section class='fixed text-sm flex flex-col p-2 m-2 mt-2 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
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
      <label for='{identif}' class="w-[150px]">{label1}&nbsp;</label>
      <input
        id='{identif}'
        type='range'
        value={config}
        min={min}
        max={max}
        step=0.1
        oninput={(e) => updateValue(key, +(e.target as HTMLInputElement).value)}
        disabled={isPlaying}
        class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50'
      />
      <label for='{identif}' class='w-8 text-right'>{config.toFixed(1)}</label>
    </div>
  {/snippet}

  <div class='flex flex-row justify-between items-center'>
    <label for='rango-mantos' class="w-[150px]">Shells&nbsp;</label>
    <input
      id='rango-mantos'
      type='range'
      value={configs.mantos}
      min=3
      max=10
      oninput={(e) => updateValue('mantos', +(e.target as HTMLInputElement).value)}
      disabled={isPlaying}
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50'
    />
    <label for='rango-mantos' class='w-8 text-right'>{Math.round(configs.mantos)}</label>
  </div>
  
  {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'X vertex', 'vertexX')}
  {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Y vertex', 'vertexY')}
  {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Z vertex', 'vertexZ')}
  {@render valores('rango-offset', configs.offset, -8, 8, 'Offset', 'offset')}
  {#if !isPlaying}
  {@render valores('rango-clipV1', configs.clipV1, 0, 50, 'Angle clip', 'clipV1')}
  {@render valores('rango-clipV2', configs.clipV2, 0, 50, 'Distance clip', 'clipV2')}
  {/if}

  {#if showRuled}
  <div class='flex flex-row justify-between items-center'>
    <label for='rango-segmentos' class="w-[150px]">Segments&nbsp;</label>
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