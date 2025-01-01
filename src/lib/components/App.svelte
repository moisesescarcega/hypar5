<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  const configs = $state({
    mantos: 3,
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