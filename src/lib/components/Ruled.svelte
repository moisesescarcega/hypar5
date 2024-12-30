<script lang="ts">
  import { T } from '@threlte/core';
  import { Vector3, BufferGeometry, Float32BufferAttribute, Plane, MathUtils } from 'three';

  let {vertexX, vertexY, vertexZ, segments} = $props();

  let vertices = $derived([
    new Vector3(0, -vertexZ, -vertexY),
    new Vector3(vertexX, vertexZ, 0),
    new Vector3(0, -vertexZ, vertexY),
    new Vector3(-vertexX, vertexZ, 0)
  ]);

  let geometryLine = $state(new BufferGeometry());
  $effect(() => {
    let lineas: { pUno: Vector3; pDos: Vector3 }[] = [];
    for (let n = 0; n <= segments; n++) {
      let t = n / segments;
      let xA = vertices[3].x * (1 - t) + vertices[2].x * t;
      let yA = vertices[3].y * (1 - t) + vertices[2].y * t;
      let zA = vertices[3].z * (1 - t) + vertices[2].z * t;
      let xC = vertices[0].x * (1 - t) + vertices[1].x * t;
      let yC = vertices[0].y * (1 - t) + vertices[1].y * t;
      let zC = vertices[0].z * (1 - t) + vertices[1].z * t;
      lineas.push({
        pUno: new Vector3(xA, yA, zA),
        pDos: new Vector3(xC, yC, zC)
      });
    };
    if (lineas.length > 0) {
      const verticesLine = new Float32Array(lineas.length * 6); // 2 vértices por línea, 3 coordenadas por vértice
      for (let i = 0; i < lineas.length; i++) {
        verticesLine[i * 6] = lineas[i].pUno.x;
        verticesLine[i * 6 + 1] = lineas[i].pUno.y;
        verticesLine[i * 6 + 2] = lineas[i].pUno.z;
        verticesLine[i * 6 + 3] = lineas[i].pDos.x;
        verticesLine[i * 6 + 4] = lineas[i].pDos.y;
        verticesLine[i * 6 + 5] = lineas[i].pDos.z;
      }
      geometryLine.setAttribute('position', new Float32BufferAttribute(verticesLine, 3));
    }
  });

  let axisY = new Vector3(0, 1, 0);
  let axisX = new Vector3(0, 0, 1);
  let rotacion = MathUtils.degToRad(45);
  let rotacionPlanoDeCorte = MathUtils.degToRad(60);
  let clipPlane: Plane[] = [
    new Plane(new Vector3(1, 0, 0).applyAxisAngle(axisY, rotacion), 0),
    new Plane(new Vector3(1, 0, 0).applyAxisAngle(axisY, -rotacion), 0),
    new Plane(new Vector3(0, 1, 0).applyAxisAngle(axisX, rotacionPlanoDeCorte), 3),
  ];
</script>

<T.LineSegments>
  <T.BufferGeometry bind:ref={geometryLine} />
  <T.LineBasicMaterial color="red" />
</T.LineSegments>
  