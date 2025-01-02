<script lang="ts">
  import {useThrelte} from '@threlte/core';
  import { onMount } from 'svelte';
  import type { WebGLRenderer } from 'three';
  import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import Ruled from './Ruled.svelte'; 
  import Nurbs from './Nurbs.svelte';
  let { mantos, vertexX, vertexY, vertexZ, segments } = $props();

  onMount(() => {
    const {renderer} = useThrelte() as {renderer: WebGLRenderer};
    renderer.localClippingEnabled = true;
  });

</script>

<T.PerspectiveCamera
  makeDefault
  position={[-25, 18.5, 25]}
  fov={50}
>
  <OrbitControls
    autoRotate
    enableZoom={true}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>
<T.AmbientLight position={[0, 2, 4]} intensity={Math.PI / 8} />
<T.SpotLight position={[2, 0, 2]} intensity={Math.PI} />

{#snippet ruled(index:number, mantos:number, segments:number, vertexX:number, vertexY:number, vertexZ:number)}
  <Ruled {index} {mantos} {segments} {vertexX} {vertexY} {vertexZ} />
{/snippet}
<!-- {@render ruled((360 / mantos), mantos, segments, vertexX, vertexY, vertexZ)} -->
{#each {length: mantos}, i}
  {@render ruled(i, mantos, segments, vertexX, vertexY, vertexZ)}
{/each}

<!-- <Nurbs vertexX={vertexX} vertexY={vertexY} vertexZ={vertexZ} /> -->