<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  const configs = $state({
    vertexX: 11,
    vertexY: 7,
    vertexZ: 13,
    segments: 45
  });
</script>

<section class='fixed text-sm flex flex-col p-2 m-2 mt-12 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
  <h5 class="w-full my-0 py-0"><strong>Hypar</strong></h5>

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
      <label for='{identif}' class='w-8 text-right'>{config}</label>
    </div>
  {/snippet}
  {@render valores('rango-vertexX', configs.vertexX, 3, 50, 'Vértice X', (e) => configs.vertexX = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexY', configs.vertexY, 3, 50, 'Vértice Y', (e) => configs.vertexY = +(e.target as HTMLInputElement).value)}
  {@render valores('rango-vertexZ', configs.vertexZ, 3, 50, 'Vértice Z', (e) => configs.vertexZ = +(e.target as HTMLInputElement).value)}
  {@render valores('segments-range', configs.segments, 4, 300, 'Segmentos', (e) => configs.segments = +(e.target as HTMLInputElement).value)}
  <!-- <div class='flex flex-row justify-between items-center'>
    <label for='rango-vertexX' class="w-[100px]">Vértice X:&nbsp;</label>
    <input
      id='rango-vertexX'
      type='range'
      bind:value={configs.vertexX}
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <label for='rango-vertexX' class='w-8 text-right'>{configs.vertexX}</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <label for='rango-vertexY' class="w-[100px]">Vértice Y:&nbsp;</label>
    <input
      id='rango-vertexY'
      type='range'
      bind:value={configs.vertexY}
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <label for='rango-vertexY' class='w-8 text-right'>{configs.vertexY}</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <label for='rango-vertexZ' class="w-[100px]">Vértice Z:&nbsp;</label>
    <input
      id='rango-vertexZ'
      type='range'
      bind:value={configs.vertexZ}
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <label for='rango-vertexZ' class='w-8 text-right'>{configs.vertexZ}</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <label for='segments-range'>Segmentos:&nbsp;</label>
    <input
      id='segments-range'
      type='range'
      bind:value={configs.segments}
      min='4'
      max='300'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <label for='segments-range' class='w-10 text-right'>{configs.segments}</label>
  </div> -->
</section>

<Canvas>
  <Scene {...configs} />
</Canvas>

<style lang="postcss">
  :global(html) {
    font-family: 'Trebuchet MS', sans-serif;
  }
</style>