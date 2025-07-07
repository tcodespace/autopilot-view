import * as THREE from "three"
import { GRID_COLOR } from "../const"
/**
 * @description 创建网格辅助器
 * @param size 网格大小
 * @param divisions 网格划分
 * @param colorCenterLine 中心线颜色
 * @param colorGrid 网格颜色
 * @returns THREE.GridHelper
 */
export function createGridHelper(
  size: number = 10,
  divisions: number = 10,
  colorCenterLine: number = GRID_COLOR.colorCenterLine,
  colorGrid: number = GRID_COLOR.colorGrid
) {
  return new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid)
}

/**
 * @description 坐标轴辅助线
 * @param size 轴的线条大小
 */
export function createAxesHelper(size: number = 10) {
  return new THREE.AxesHelper(size)
}
