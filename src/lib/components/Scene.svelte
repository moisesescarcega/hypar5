<script lang="ts">
  import {useThrelte} from '@threlte/core';
  import { onMount } from 'svelte';
  import type { WebGLRenderer } from 'three';
  import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import Ruled from './RuledAlt.svelte'; 
  let { vertexX, vertexY, vertexZ, segments } = $props();
  // export let segments: number; 

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
<T.Mesh position={[-vertexX, vertexZ, 0]} key="a">
  <T.BoxGeometry args={[0.2, 0.2, 0.2]} />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>
<T.Mesh position={[0, -vertexZ, vertexY]} key="b">
  <T.BoxGeometry args={[0.2, 0.2, 0.2]} />
  <T.MeshBasicMaterial color="blue" />
</T.Mesh>
<T.Mesh position={[vertexX, vertexZ, 0]} key="c">
  <T.BoxGeometry args={[0.2, 0.2, 0.2]} />
  <T.MeshBasicMaterial color="green" />
</T.Mesh>
<T.Mesh position={[0, -vertexZ, -vertexY]} key="d">
  <T.BoxGeometry args={[0.2, 0.2, 0.2]} />
  <T.MeshBasicMaterial color="yellow" />
</T.Mesh>
<Ruled segments={segments} vertexX={vertexX} vertexY={vertexY} vertexZ={vertexZ} />