import { Vector3, Plane, MathUtils } from 'three';

interface ClipPlanesProps {
 index: number;
 clipV1: number;
 clipV2: number;
 mantos: number;
 rotacion: number;
}

export function calculateClipPlanes(props: ClipPlanesProps): Plane[] {
 const axisY = new Vector3(0, 1, 0);
 const axisZ = new Vector3(-1, 0, 0);

 const anguloPorManto = 360 / props.mantos;
 const medioAnguloPorManto = 180 / props.mantos;
 const rotacionPlanoCorte = MathUtils.degToRad((anguloPorManto * props.index) + medioAnguloPorManto);
 const rotacionPlanoInclinado = MathUtils.degToRad(90 + (props.rotacion * props.index));

 return [
   new Plane(new Vector3(0, 0, 1).applyAxisAngle(axisY, rotacionPlanoCorte), 0),
   new Plane(new Vector3(0, 0, -1).applyAxisAngle(axisY, rotacionPlanoCorte + MathUtils.degToRad(-anguloPorManto)), 0),
   new Plane(new Vector3(0, 0, -1).applyAxisAngle(axisZ, MathUtils.degToRad(-props.clipV1)).applyAxisAngle(axisY, rotacionPlanoInclinado), props.clipV2)
 ];
}