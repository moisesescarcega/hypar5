<script lang="ts">
    import { T } from "@threlte/core";
    import { Vector3, DoubleSide, MathUtils } from "three";
    import { ParametricGeometry } from "three/examples/jsm/Addons.js";
    import { NURBSSurface } from "three/examples/jsm/Addons.js";
    import { calculateClipPlanes } from "./ClipPlanes";

    let { index, mantos, vertexX, vertexY, vertexZ, offset, clipV1, clipV2 } = $props();

    let rotacion = $derived(360 / mantos);
    let clipPlane = $derived(calculateClipPlanes({ mantos, clipV1, clipV2, index, rotacion }));
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

    function calculatePosition(index: number) {
        // Convertir degrees a radianes antes del cálculo trigonométrico
        const angle = MathUtils.degToRad(rotacion * index);
        
        const x = Math.cos(angle) * offset;
        const y = Math.sin(angle) * offset;
        console.log(x, y);
        return { x, y };
    }

    function colorIndex(index: number) {
        switch (index) {
            case 0:
                return "#193d6b";
            case 1:
                return "#6b1919";
            default:
                return "#3d6b19";
        }
    }
</script>

<T.Mesh 
    geometry={nurbsGeometry} 
    rotation.y = {MathUtils.degToRad(rotacion * index)} 
    position={[calculatePosition(index).x, 0, calculatePosition(index).y]} 
>
    <T.MeshStandardMaterial color={colorIndex(index)} side={DoubleSide} clippingPlanes={clipPlane} />
</T.Mesh>