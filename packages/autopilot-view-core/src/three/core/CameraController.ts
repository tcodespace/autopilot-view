import { DEFAULT_CAMERA_VALUE } from "../const"
import * as THREE from "three"

import { OrbitControls } from "three/examples/jsm/Addons.js"

export class CameraController {
  public camera: THREE.PerspectiveCamera
  public controls: OrbitControls

  constructor(canvas: HTMLCanvasElement) {
    this.camera = new THREE.PerspectiveCamera(
      DEFAULT_CAMERA_VALUE.fov,
      canvas.width / canvas.height,
      DEFAULT_CAMERA_VALUE.near,
      DEFAULT_CAMERA_VALUE.far
    )

    this.camera.position.set(
      DEFAULT_CAMERA_VALUE.position.x,
      DEFAULT_CAMERA_VALUE.position.y,
      DEFAULT_CAMERA_VALUE.position.z
    )

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.update()
  }

  public resize(aspect: number) {
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
  }

  public update() {
    this.controls.update()
  }
}
