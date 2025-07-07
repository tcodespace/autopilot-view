import * as THREE from "three"
import { Loop } from "./Loop"
import { Renderer } from "./Renderer"
import { CameraController } from "./CameraController"

export class SceneManager {
  public scene: THREE.Scene
  public renderer: Renderer
  public cameraController: CameraController
  public loop: Loop

  constructor(private canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene()
    this.renderer = new Renderer(canvas)
    this.cameraController = new CameraController(canvas)
    this.loop = new Loop(this.renderer, this.scene, this.cameraController)
  }

  public start() {
    this.loop.start()
  }

  public stop() {
    this.loop.stop()
  }

  public add(...objects: THREE.Object3D[]) {
    this.scene.add(...objects)
  }

  public resize() {
    const { width, height } = this.canvas
    this.cameraController.resize(width / height)
    this.renderer.resize(width, height)
  }
}
