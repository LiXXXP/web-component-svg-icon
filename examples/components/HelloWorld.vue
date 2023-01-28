<template>
  <div class="icons-container">
    <div v-for="icon in svgIcons" :key="icon" @click="handleClipboard(icon)">
      <el-tooltip placement="top">
        <template #content>
          {{ generateIconCode(icon) }}
        </template>
        <div class="icon-wrapper">
          <svg-icon :icon-class="icon"></svg-icon>
          <div>{{ icon }}</div>
        </div>
      </el-tooltip>
    </div>

    <div v-for="icon in gwinIcons" :key="icon" class="gwin-icons" @click="handleClipboard(icon)">
      <el-tooltip placement="top">
        <template #content>
          {{ generateIconCode(icon) }}
        </template>
        <div class="icon-wrapper">
          <svg-icon :icon-class="icon"></svg-icon>
          <div>{{ icon }}</div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { SvgIcon } from '../../lib/index' // 测试
import { SvgIcon } from '~/index' // 开发
import { ElMessage } from 'element-plus'
import { svgIcons, gwinIcons } from './svg-icon'

function generateIconCode(symbol: string) {
  return `<svg-icon icon-class="${symbol}" />`
}

function handleClipboard(symbol: string) {
  navigator.clipboard.writeText(generateIconCode(symbol))
  ElMessage.success('复制成功')
}
</script>

<style lang="scss" scoped>
.icons-container {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  background: rgba($color: #000000, $alpha: 0.1);
  .icon-wrapper {
    margin: 10px;
  }
}
</style>
