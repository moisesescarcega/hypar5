<script lang="ts">
  import {useThrelte} from '@threlte/core';
  import {Suspense} from '@threlte/extras';
  import {Text} from '@threlte/extras';
  import { onMount } from 'svelte';
  import { DoubleSide, type WebGLRenderer } from 'three';
  import { T } from '@threlte/core';
  import { Environment, OrbitControls } from '@threlte/extras';
  import Ruled from './Ruled.svelte'; 
  import Nurbs from './Nurbs.svelte';
  let { mantos, vertexX, vertexY, vertexZ, offset, clipV1, clipV2, segments, showRuled, isPlaying } = $props();

  onMount(() => {
    const {renderer} = useThrelte() as {renderer: WebGLRenderer};
    renderer.localClippingEnabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

</script>

<Suspense>
  {#snippet fallback()}
    <Text
      position.z={-2}
      text="Loading..."
      fontSize={2}
      color="black"
      anchorX="50%"
      anchorY="50%"
      oncreate={(ref) => {
        ref.lookAt(-40, 25, 40)
      }}
    />
  {/snippet}

<T.PerspectiveCamera
  makeDefault
  position={[-25, 18.5, 25]}
  fov={50}
>
<OrbitControls
  autoRotate={isPlaying}
  enableZoom={true}
  enableDamping
  autoRotateSpeed={0.5}
  target.y={1.5}
/>
</T.PerspectiveCamera>
<T.AmbientLight position={[0, 0, 0]} intensity={Math.PI / 8} />
<!-- <T.SpotLight position={[6, 3, 4]} intensity={Math.PI} /> -->
<Environment url='/venice_sunset_1k.hdr' />
<!-- <T.Mesh>
  <T.SphereGeometry args={[50, 30, 30]} />
  <T.MeshBasicMaterial color="#dd6677" side={DoubleSide} />
</T.Mesh> -->

{#if showRuled}

{#snippet ruled(index:number, mantos:number, segments:number, vertexX:number, vertexY:number, vertexZ:number, clipV1:number, clipV2:number, offset:number)}
  <Ruled {index} {mantos} {segments} {vertexX} {vertexY} {vertexZ} {clipV1} {clipV2} {offset} />
{/snippet}
{#each {length: mantos}, i}
  {@render ruled(i, mantos, segments, vertexX, vertexY, vertexZ, clipV1, clipV2, offset)}
{/each}

{:else}

{#snippet nurbs(index:number, mantos:number, vertexX:number, vertexY:number, vertexZ:number, clipV1:number, clipV2:number, offset:number)}
  <Nurbs {index} {mantos} {vertexX} {vertexY} {vertexZ} {clipV1} {clipV2} {offset} />
{/snippet}
{#each {length: mantos}, i}
  {@render nurbs(i, mantos, vertexX, vertexY, vertexZ, clipV1, clipV2, offset)}
{/each}

{/if}

</Suspense>