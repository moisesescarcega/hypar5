<script lang="ts">
    import { T } from "@threlte/core";
    import { Vector3, DoubleSide } from "three";
    import { ParametricGeometry } from "three/examples/jsm/Addons.js";
    import { NURBSSurface } from "three/examples/jsm/Addons.js";
    let { vertexX, vertexY, vertexZ } = $props();

    const degree1 = 1;
    const degree2 = 1;
    let controlPoints = $derived([
        [
        new Vector3(vertexX, vertexZ, 0),
        new Vector3(0, -vertexZ, vertexY)
        ],
        [
        new Vector3(0, -vertexZ, -vertexY),
        new Vector3(-vertexX, vertexZ, 0)
        ]
    ]);

    const knots1 = [0, 0, 1, 1];
    const knots2 = [0, 0, 1, 1];
    
    let nurbsGeometry = $state(new ParametricGeometry);
    $effect(() => {
        let nurbsSurface = new NURBSSurface(degree1, degree2, knots1, knots2, controlPoints);
        function getSurfacePoints (u: number, v: number, target: Vector3) {
            return nurbsSurface.getPoint(u, v, target)
        }
        nurbsGeometry = new ParametricGeometry(getSurfacePoints, 33, 33);
    });
</script>

<T.Mesh geometry={nurbsGeometry} >
    <T.MeshStandardMaterial color="blue" side={DoubleSide} />
</T.Mesh>