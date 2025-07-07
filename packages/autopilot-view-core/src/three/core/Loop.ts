import * as THREE from "three"
import type { CameraController } from "./CameraController"

export class Loop {
  private running: boolean = false
  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private cameraController: CameraController
  ) {}

  start() {
    if (this.running) return
    this.running = true
    this.renderer.setAnimationLoop(this.animation.bind(this))
  }

  stop() {
    this.running = false
    this.renderer.setAnimationLoop(null)
  }

  private animation() {
    this.cameraController.update()
    this.renderer.render(this.scene, this.cameraController.camera)
  }
}
