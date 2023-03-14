<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    name: string
    color?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    name: '',
    color: '',
  })

  const symbolId = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg class="svg-icon">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -0.15em;
    flex-shrink: 0;
  }
</style>
