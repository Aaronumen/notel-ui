<template>
  <button :style="{ color }" class="notel-button" type="button">测试</button>
</template>
<script setup lang="ts" name="notel-button" inheritAttrs="false">
const props = withDefaults(
  defineProps<{
    color: string
  }>(),
  {
    color: "red"
  }
)
console.log(1)
</script>

<style scoped lang="less">
.notel-button {
  color: @color;
  font-size: @font-size;
}
</style>
