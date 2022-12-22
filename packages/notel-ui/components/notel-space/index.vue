<template>
  <div
    class="notel-space"
    :style="{ rowGap: rowGap + 'px', columnGap: columnGap + 'px' }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts" name="notel-space">
const props = withDefaults(
  defineProps<{
    rowGap?: number | string
    columnGap?: number | string
  }>(),
  {
    rowGap: 8,
    columnGap: 8
  }
)
</script>

<style lang="less" scoped>
.notel-space {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
}
</style>
