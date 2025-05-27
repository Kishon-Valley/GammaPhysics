/// <reference types="three" />
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, Object3D } from 'three';
    export class OrbitControls extends Object3D {
        constructor(camera: Camera, domElement?: HTMLElement);
        update(): void;
        enableDamping: boolean;
    }
}