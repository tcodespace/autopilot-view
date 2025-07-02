import * as THREE from "three"

export class Loop {
  private clock: THREE.Clock = new THREE.Clock()
  private running: boolean = false
  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera
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
    this.renderer.render(this.scene, this.camera)
  }
}
