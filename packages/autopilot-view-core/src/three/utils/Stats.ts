import Stats from "three/addons/libs/stats.module.js"

export class StatsPanel {
  public stats: Stats
  constructor() {
    this.stats = new Stats()
    this.stats.showPanel(0)
    this.stats.dom.style.position = "absolute"
  }
  appendTo(parent: HTMLElement) {
    parent.appendChild(this.stats.dom)
  }
  update() {
    this.stats.update()
  }
}
