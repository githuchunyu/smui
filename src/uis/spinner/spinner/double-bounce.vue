<template>
  <div class="smui-spinner-double-bounce" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div class="smui-spinner-double-bounce-bounce1"></div>
    <div class="smui-spinner-double-bounce-bounce2"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'double-bounce',

    mixins: [common]
  };
</script>

<style lang="less" scoped>
@import url(../../var.less);
  .smui-spinner {
    &-double-bounce {
      position: relative;

    &-bounce1, &-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        background: @color-primary;
        animation: smui-spinner-double-bounce 2.0s infinite ease-in-out;
      }

      &-bounce2 {
        animation-delay: -1.0s;
      }
    }
  }

  @keyframes smui-spinner-double-bounce {
    0%, 100% {
      transform: scale(0.0);
    }

    50% {
      transform: scale(1.0);
    }
  }
</style>
