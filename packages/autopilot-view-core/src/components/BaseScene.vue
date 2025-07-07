<template>
  <canvas id="base-scene" width="500" height="500" />
</template>

<script setup lang="ts">
import { debounce } from "rattail"
import { SceneManager } from "@core/three/core/SceneManager"
import { createGridHelper, createAxesHelper } from "@core/three/objects/Helper"

let sceneManager: SceneManager | null = null

function initBaseScene() {
  const canvas = document.getElementById("base-scene") as HTMLCanvasElement
  sceneManager = new SceneManager(canvas)

  const gridHelper = createGridHelper(100, 10)
  const axesHelper = createAxesHelper(10)

  sceneManager.add(gridHelper, axesHelper)
  sceneManager.start()
}

const resize = debounce(() => {
  sceneManager?.resize()
}, 1000)

onMounted(() => {
  initBaseScene()
  window.addEventListener("resize", resize)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize)
})
</script>
