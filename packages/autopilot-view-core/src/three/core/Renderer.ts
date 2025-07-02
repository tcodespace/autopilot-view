import * as THREE from "three"

export class Renderer extends THREE.WebGLRenderer {
  constructor(canvas: HTMLCanvasElement) {
    super({
      canvas,
      antialias: true
    })
    this.resize(canvas.width, canvas.height)
    this.setPixelRatio(window.devicePixelRatio)
  }

  public resize(width: number, height: number) {
    this.setSize(width, height)
  }
}
