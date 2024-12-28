<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  import { writable } from 'svelte/store';

  let segments = writable(12); // Define segments as a writable store

  function handleSegments(event: Event) {
    const target = event.target as HTMLInputElement;
    segments.set(Number(target.value)); // Update segments value
  }
</script>

<section class='absolute flex flex-col p-2 m-2 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]'>
  <h5 class="w-full my-0 py-0"><strong>Hypar</strong></h5>

  <div class='flex flex-row justify-between items-center'>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="w-[100px]">Vértice X:&nbsp;</label>
    <input
      id='rango-vertexX'
      type='range'
      value=5
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class='w-8 text-right'>5</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="w-[100px]">Vértice Y:&nbsp;</label>
    <input
      id='rango-vertexY'
      type='range'
      value=5
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class='w-8 text-right'>5</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="w-[100px]">Vértice Z:&nbsp;</label>
    <input
      id='rango-vertexZ'
      type='range'
      value=5
      min='3'
      max='50'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class='w-8 text-right'>5</label>
  </div>

  <div class='flex flex-row justify-between items-center'>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label>Segmentos:&nbsp;</label>
    <input
      id='segments-range'
      type='range'
      value={$segments}
      on:input={handleSegments}
      min='4'
      max='300'
      class='w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
    />
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class='w-10 text-right'>{$segments}</label>
  </div>
</section>

<Canvas>
  <Scene segments={$segments} />
</Canvas>

<style>
  section {
    font-size: small;
  }
</style>