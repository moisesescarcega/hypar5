<script lang="ts">
  import { Canvas } from '@threlte/core';
  import { Tween } from 'svelte/motion';
  import { onDestroy, onMount } from 'svelte';
  import { Button, Range, Accordion, AccordionItem } from 'flowbite-svelte';
  import { PlaySolid, CirclePauseOutline, ChevronDoubleRightOutline, ChevronDoubleLeftOutline } from 'flowbite-svelte-icons'
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
  let itemAccordion = $state(false);
  
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
  function animateToPrev() {
    if (configurations.length === 0) return;
    currentIndex = (currentIndex === 0) ? configurations.length - 1 : currentIndex - 1;
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
      itemAccordion = true;
    }
  }
  function toggleNext() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    animateToNext();
    if (isPlaying) {
      intervalId = setInterval(animateToNext, 5000);
    }
  }
  function togglePrev() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    animateToPrev();
    if (isPlaying) {
      intervalId = setInterval(animateToPrev, 5000);
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
<section class="fixed mt-12 z-[10] flex flex-col md:flex-row">
  <article class='text-sm flex flex-col flex-none p-2 m-2 bg-primary-200 text-gray-900 dark:bg-primary-700 dark:text-white rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none w-[360px] h-fit'>
    {#if isPlaying}
      <div class="text-sm font-bold mb-1 flex flex-row justify-between items-center">
        <ChevronDoubleLeftOutline onclick={togglePrev} class="w-6 h-6" cursor="pointer" />
        {configurations[currentIndex].hypar}
        <ChevronDoubleRightOutline onclick={toggleNext} class="w-6 h-6" cursor="pointer" />
      </div>
    {/if}
    <div class="flex flex-row w-auto space-x-2 my-2">
      <Button outline color="primary" class="text-gray-900 dark:text-white flex-auto h-8" size="sm" onclick={toogleRuled}>
        {showRuled ? 'Solid Surface' : 'Ruled Surface'}
      </Button>
      <Button outline color="primary" class="text-gray-900 dark:text-white flex-auto h-8" size="sm" onclick={togglePlay}>
        {#if isPlaying}
          <CirclePauseOutline class="w-6 h-6" />&nbsp;Modify
        {:else}
          <PlaySolid class="w-6 h-6" />&nbsp;Play
        {/if}
      </Button>
    </div>
    {#if showRuled}
    <div class='flex flex-row justify-between items-center'>
      <label for='rango-segmentos' class="w-[150px]">Segments&nbsp;</label>
      <Range
        id='rango-segmentos'
        bind:value={segments}
        min=4
        max=300
        class='w-full h-2 mx-3 bg-gray-400 dark:bg-primary-100 disabled:bg-gray-100 accent-gray-800'
      />
      <label for='rango-segmentos' class='w-8 text-right'>{segments}</label>
    </div>
    {/if}
  </article>
  <article class='text-sm flex flex-col p-2 m-2 bg-primary-200 text-gray-900 dark:bg-primary-700 dark:text-white rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none w-[360px] h-fit'>
    <Accordion flush>
      <AccordionItem bind:open={itemAccordion} paddingFlush='p-1'>
        <span slot="header"><strong>Parameters of the hypar geometry</strong></span>
        <div class='flex flex-row justify-between items-center'>
          <label for='rango-mantos' class="w-[150px]">Shells&nbsp;</label>
          <Range
            id='rango-mantos'
            value={configs.mantos}
            min=2
            max=10
            oninput={(e) => updateValue('mantos', +(e.target as HTMLInputElement).value)}
            disabled={isPlaying}
            class='w-full h-2 mx-3 bg-gray-400 dark:bg-primary-100 disabled:bg-gray-100 accent-gray-800'
          />
          <label for='rango-mantos' class='w-8 text-right'>{Math.round(configs.mantos)}</label>
        </div>
        {#snippet valores(identif: string, config: any, min: number, max: number, label1: string, key: string)}
          <div class='flex flex-row justify-between items-center'>
            <label for='{identif}' class="w-[150px]">{label1}&nbsp;</label>
            <Range
              id={identif}
              value={config}
              min={min}
              max={max}
              step=0.1
              oninput={(e) => updateValue(key, +(e.target as HTMLInputElement).value)}
              disabled={isPlaying}
              class='w-full h-2 mx-3 bg-gray-400 dark:bg-primary-100 disabled:bg-gray-100 accent-gray-800'
            />
            <label for='{identif}' class='w-8 text-right'>{config.toFixed(1)}</label>
          </div>
        {/snippet}
        {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'X distance', 'vertexX')}
        {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Y distance', 'vertexY')}
        {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Z distance', 'vertexZ')}
        {@render valores('rango-offset', configs.offset, -5, 10, 'Offset', 'offset')}
        {#if !isPlaying}
        {@render valores('rango-clipV1', configs.clipV1, 0, 50, 'Angle clip', 'clipV1')}
        {@render valores('rango-clipV2', configs.clipV2, 0, 50, 'Distance clip', 'clipV2')}
        {/if}
      </AccordionItem>
    </Accordion>
  </article>
</section>

<Canvas>
  <Scene {...configs} {segments} {showRuled} {isPlaying} />
</Canvas>

<style lang="postcss">
  :global(html) {
 font-family: 'Trebuchet MS', sans-serif;
  }
 </style>