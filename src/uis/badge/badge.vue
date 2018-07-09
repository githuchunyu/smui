<template>
    <div :class="'smui-badge '+type+' '+(circle?'circle':'')">
      <div class="smui-badge-label">{{label}}</div>
    </div>
</template>

<script scoped>
export default {
    name:'sm-badge',
    data: function () {
        return {

        }
    },
    props:{
      type:{
        type:String,
        default:'primary',
      },
      label:{
        type:String,
        default:'徽章'
      },
      circle:{
        type:Boolean,
        default:false,
      }
    },
    watch:{

    },
    computed:{

    },
    methods: {

    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-badge {
    display: inline-flex;
    position: relative;height:64px;
    &.circle {
      .smui-badge-label {
        border-radius: 4px;
      }
    }
    &-label {
      display: inline-block;padding:0 8px;margin-left:8px;
      height:32px;line-height: 32px;font-size: 16px;
      color:#FFF;
      background: @color-primary;
    }
    &:after {
      content:'';
      position: absolute;bottom:14px;left:8px;z-index: -1;
      transform: rotateZ(-60deg);
      border:20px solid transparent;
      border-top:20px solid @color-primary;
    }
    &.success {
      .smui-badge-label {
        background: @color-success;
      }
      &:after {
        content:'';
        border-top:20px solid @color-success;
      }
    }
    &.warning {
      .smui-badge-label {
        background: @color-warning;
      }
      &:after {
        content:'';
        border-top:20px solid @color-warning;
      }
    }
    &.error {
      .smui-badge-label {
        background: @color-error;
      }
      &:after {
        content:'';
        border-top:20px solid @color-error;
      }
    }
  }
</style>
