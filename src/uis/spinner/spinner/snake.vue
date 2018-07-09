<template>
  <div class="smui-spinner-snake" :style="{
    'height': spinnerSize,
    'width': spinnerSize
    }">
  </div>
</template>

<script>
  import common from './common.vue';
  export default {
    name: 'snake',
    mixins: [common]
  };
</script>

<style lang="less" scoped>
@import url(../../var.less);
  .smui-spinner-snake {
    animation: smui-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-top-color: @color-primary;
    border-left-color: @color-primary;
    border-bottom-color: @color-primary;
    border-radius: 50%;
  }

  @keyframes smui-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
