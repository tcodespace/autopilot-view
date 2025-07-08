import * as THREE from "three"
import { Loop } from "./Loop"
import { Renderer } from "./Renderer"
import { CameraController } from "./CameraController"

export class SceneManager {
  private scene: THREE.Scene
  private renderer: Renderer
  private cameraController: CameraController
  private loop: Loop

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

  public addUpdateFn(fn: () => void) {
    this.loop.addUpdateFn(fn)
  }

  public resize() {
    const { clientWidth, clientHeight } = this.canvas
    this.cameraController.resize(clientWidth / clientHeight)
    this.renderer.resize(clientWidth, clientHeight)
  }
}
