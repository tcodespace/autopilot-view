<template>
  <canvas id="base-scene" width="500" height="500" />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { SceneManager } from "@core/three/core/SceneManager"
import { createGridHelper, createAxesHelper } from "@core/three/objects/Helper"

function initBaseScene() {
  const canvas = document.getElementById("base-scene") as HTMLCanvasElement
  const sceneManager = new SceneManager(canvas)

  const gridHelper = createGridHelper(100, 10)
  const axesHelper = createAxesHelper(10)

  sceneManager.add(gridHelper, axesHelper)
  sceneManager.start()
}

onMounted(() => {
  initBaseScene()
})
</script>

<style scoped></style>
