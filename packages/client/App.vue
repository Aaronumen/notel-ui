<template>
  <div class="scroll">
    <notel-button color="blue"></notel-button>
    <notel-input name="测试"></notel-input>
    <div tabindex="0" v-focus>测试</div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.scroll {
  height: 300px;
  overflow: scroll;
}
.test {
  height: 300px;
}
</style>
