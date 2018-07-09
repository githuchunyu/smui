<template>
  <div class="smui-spinner-triple-bounce">
    <div class="smui-spinner-triple-bounce-bounce1" :style="bounceStyle"></div>
    <div class="smui-spinner-triple-bounce-bounce2" :style="bounceStyle"></div>
    <div class="smui-spinner-triple-bounce-bounce3" :style="bounceStyle"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'triple-bounce',

    mixins: [common],

    computed: {
      spinnerSize() {
        return parseInt((this.size || this.$parent.size || 28) / 3) + 'px';
      },

      bounceStyle() {
        return {
          width: this.spinnerSize,
          height: this.spinnerSize,
        };
      }
    }
  };
</script>

<style lang="less" scoped>
@import url(../../var.less);
.smui-spinner {
  &-triple-bounce {
    text-align: center;
    &-bounce1, &-bounce2, &-bounce3 {
      border-radius: 50%;
      display: inline-block;
      background: @color-primary;
      animation: smui-spinner-triple-bounce 1.4s infinite ease-in-out both;
    }

    &-bounce1 {
      animation-delay: -0.32s;
    }

    &-bounce2 {
      animation-delay: -0.16s;
    }
  }
}

@keyframes smui-spinner-triple-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1);
  }
}
</style>
