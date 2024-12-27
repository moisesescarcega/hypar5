<script lang="ts">
  import { T } from '@threlte/core';
  import { Vector3, BufferGeometry, Float32BufferAttribute } from 'three';
  import { Plane } from 'three';
  export let vertexX: number;
  export let vertexY: number;
  export let vertexZ: number;
  export let segments: number;
  let vertices = [
    new Vector3(0, -vertexZ, -vertexY),
    new Vector3(vertexX, vertexZ, 0),
    new Vector3(0, -vertexZ, vertexY),
    new Vector3(-vertexX, vertexZ, 0)
  ];
  let lineas: { pUno: Vector3, pDos: Vector3 }[] = [];
  $: {
      lineas = [];
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
    }
  }
  let clipPlane: Plane[] = [new Plane(new Vector3(1, 0, 0), 0)];

  let geometryLine = new BufferGeometry();
  // Setup vertices if lineas array has elements
  $: if (lineas.length > 0) {
    const verticesLine = new Float32Array(lineas.length * 6); // 2 vertices per line, 3 coordinates per vertex
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
</script>

<T.Mesh position={[-vertexX, vertexZ, 0]} key='a' >
  <T.BoxGeometry args={[0.2,0.2,0.2]} />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>
<T.Mesh position={[0, -vertexZ, vertexY]} key='b' >
  <T.BoxGeometry args={[0.2,0.2,0.2]} />
  <T.MeshBasicMaterial color="blue" />
</T.Mesh>
<T.Mesh position={[vertexX, vertexZ, 0]} key='c' >
  <T.BoxGeometry args={[0.2,0.2,0.2]} />
  <T.MeshBasicMaterial color="green" />
</T.Mesh>
<T.Mesh position={[0, -vertexZ, -vertexY]} key='d' >
  <T.BoxGeometry args={[0.2,0.2,0.2]} />
  <T.MeshBasicMaterial color="yellow" />
</T.Mesh>

<T.LineSegments>
  <T.BufferGeometry bind:ref={geometryLine} />
  <T.LineBasicMaterial color="red" clippingPlanes={clipPlane} />
</T.LineSegments>
