<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SvgIcon'
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
  iconClass: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: '',
  className: ''
})

const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className
  }
  return 'svg-icon'
})
</script>
