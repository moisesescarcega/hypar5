<script lang="ts">
  import { T } from '@threlte/core';
  import { Vector3, BufferGeometry, Float32BufferAttribute, Plane, MathUtils } from 'three';

  let {index, mantos, vertexX, vertexY, vertexZ, segments} = $props();

  let rotacion = $derived(360 / mantos);
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

  let axisY = new Vector3(0, 1, 0);
  let axisZ = new Vector3(-1, 0, 0);
  const anguloPorManto = $derived(360 / mantos);
  const medioAnguloPorManto = $derived(180 / mantos);
  let rotacionPlanoCorte = $derived(MathUtils.degToRad((anguloPorManto * index) + medioAnguloPorManto));
  let rotacionPlanoInclinado = $derived(MathUtils.degToRad(90 + (rotacion * index)));
  let clipPlane = $derived([
    new Plane(new Vector3(0, 0, 1).applyAxisAngle(axisY, rotacionPlanoCorte), 0),
    new Plane(new Vector3(0, 0, -1).applyAxisAngle(axisY, rotacionPlanoCorte + MathUtils.degToRad(-anguloPorManto)), 0),
    new Plane(new Vector3(0, 0, -1)
    .applyAxisAngle(axisZ, MathUtils.degToRad(-15))
    .applyAxisAngle(axisY, rotacionPlanoInclinado),
    4)
  ]);
</script>

<T.LineSegments rotation.y={MathUtils.degToRad(rotacion * index)} >
  <T.BufferGeometry bind:ref={geometryLine} />
  <T.LineBasicMaterial color="red" clippingPlanes={clipPlane} />
</T.LineSegments>
