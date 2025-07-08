<template>
  <div class="base-scene">
    <div class="base-scene-stats"></div>
    <canvas id="base-scene-canvas" width="500" height="500" />
  </div>
</template>

<script setup lang="ts">
import { debounce } from "rattail"
import { StatsPanel } from "@core/three/utils/Stats"
import { SceneManager } from "@core/three/core/SceneManager"
import { createGridHelper, createAxesHelper } from "@core/three/objects/Helper"

let sceneManager: SceneManager
let statsPanel: StatsPanel

function initBaseScene() {
  const canvas = document.getElementById("base-scene-canvas") as HTMLCanvasElement
  sceneManager = new SceneManager(canvas)

  statsPanel = new StatsPanel()
  statsPanel.appendTo(document.querySelector(".base-scene-stats") as HTMLElement)

  const gridHelper = createGridHelper(100, 10)
  const axesHelper = createAxesHelper(10)

  sceneManager.add(gridHelper, axesHelper)
  sceneManager.addUpdateFn(() => statsPanel.update())
  sceneManager.start()
}

const resize = debounce(() => {
  sceneManager.resize()
}, 1000)

onMounted(() => {
  initBaseScene()
  window.addEventListener("resize", resize)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize)
})
</script>
<style lang="less" scoped>
.base-scene {
  position: relative;
}
</style>
