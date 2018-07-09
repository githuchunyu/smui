<template>
  <div :class="['smui-spinner-fading-circle']" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :class="['circle' + n]" class="smui-spinner-fading-circle-circle"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'fading-circle',

    mixins: [common],

  };
</script>

<style lang="less" scoped>
@import url(../../var.less);
  .smui-spinner {
    &-fading-circle {
      position: relative;
      &-circle {
        height:100%;width:100%;
        position: absolute;
        top: 0;left:0;
        &:before {
          content: " ";
          display: block;
          margin: 0 auto;
          height: 15%;width:15%;
          background: @color-primary;
          border-radius: 100%;
          animation: smui-fading-circle 1.2s infinite ease-in-out both;
        }
      }
    }
    @keyframes smui-fading-circle {
      0%, 39%, 100% { opacity: 0 }
      40% { opacity: 1 }
    }
  }

  .loop(@n, @i:1) when (@i <= @n) {
      .circle@{i} {
        transform: rotate(calc(360deg / 12 * (@i - 1)));
        &:before {
          animation-delay: calc(-1.2s + 1.2s / 12 * (@i - 1));
        }
      }
      .loop(@n, (@i + 1));
  }
  .loop(12);
</style>
