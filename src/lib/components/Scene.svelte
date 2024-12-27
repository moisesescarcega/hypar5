<script lang="ts">
  import {useThrelte} from '@threlte/core';
  import { onMount } from 'svelte';
  import type { WebGLRenderer } from 'three';
  import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import Ruled from './Ruled.svelte'; 
  export let segments: number; // Add this line to accept segments as a prop

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
<Ruled segments={segments} vertexX={11} vertexY={7} vertexZ={13} />