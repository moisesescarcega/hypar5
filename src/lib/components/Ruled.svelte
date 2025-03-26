<script lang="ts">
  import { T } from '@threlte/core';
  import { Vector3, BufferGeometry, Float32BufferAttribute, MathUtils } from 'three';
  import { calculateClipPlanes } from './ClipPlanes';

  let {index, mantos, vertexX, vertexY, vertexZ, offset, clipV1, clipV2, segments} = $props();

  let rotacion = $derived(360 / mantos);
  let clipPlane = $derived(calculateClipPlanes({mantos, clipV1, clipV2, index, rotacion}));
  let vertices = $derived([
    new Vector3(0, -vertexZ, -vertexY),
    new Vector3(vertexX, vertexZ, 0),
    new Vector3(0, -vertexZ, vertexY),
    new Vector3(-vertexX, vertexZ, 0)
  ]);

  let geometryLine = $state(new BufferGeometry());
  function interpolate(pointA: Vector3, pointB: Vector3, t: number): Vector3 {
    return new Vector3(
      pointA.x * (1 - t) + pointB.x * t,
      pointA.y * (1 - t) + pointB.y * t,
      pointA.z * (1 - t) + pointB.z * t
    );
  }

  function calculatePosition(index: number) {
    const angle = (index / mantos) * Math.PI * 2; // Ángulo en radianes
    return {
        x: Math.cos(angle) * offset, // Coordenada x
        y: Math.sin(angle) * offset  // Coordenada y
    };
  }

  // Mantenemos effect, ya que setAttribute es un efecto secundario
  $effect(() => {
    const lineas = Array.from({ length: segments + 1 }, (_, n) => {
      const t = n / segments;
      return {
        pUno: interpolate(vertices[3], vertices[2], t),
        pDos: interpolate(vertices[0], vertices[1], t),
      };
    });

    if (lineas.length > 0) {
      const verticesLine = new Float32Array(lineas.length * 6);
      lineas.forEach((linea, i) => {
        verticesLine.set(
          [
            linea.pUno.x, linea.pUno.y, linea.pUno.z,
            linea.pDos.x, linea.pDos.y, linea.pDos.z,
          ],
          i * 6
        );
      });
      geometryLine.setAttribute('position', new Float32BufferAttribute(verticesLine, 3));
    }
  });

</script>

<T.LineSegments 
  rotation.y={MathUtils.degToRad(rotacion * index)} 
  position.x={calculatePosition(index).x} 
  position.y={calculatePosition(index).y} 
>
  <T.BufferGeometry bind:ref={geometryLine} />
  <T.LineBasicMaterial color="#193d6b" linewidth={1} clippingPlanes={clipPlane} />
</T.LineSegments>
