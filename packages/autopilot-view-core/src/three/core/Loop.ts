import * as THREE from "three"
import type { CameraController } from "./CameraController"

export class Loop {
  private running: boolean = false
  private loopFn: Array<() => void> = []
  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private cameraController: CameraController
  ) {}

  public start() {
    if (this.running) return
    this.running = true
    this.renderer.setAnimationLoop(this.animation.bind(this))
  }

  public stop() {
    this.running = false
    this.renderer.setAnimationLoop(null)
  }

  public addUpdateFn(fn: () => void) {
    this.loopFn.push(fn)
  }

  private animation() {
    this.loopFn.forEach((fn) => fn())
    this.cameraController.update()
    this.renderer.render(this.scene, this.cameraController.camera)
  }
}
