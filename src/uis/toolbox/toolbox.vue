<template>
  <div :class="'smui-toolbox '+(active?'active ':' ')+align">
    <div class="smui-toolbox-btn" @click="clickToolbox">+</div>
    <div class="smui-toolbox-items-wrap" ref="wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sm-toolbox',

    created() {

    },

    data() {
      return {
        active: false,
      };
    },

    props: {
      align:{
        type:String,
        default:'top',
      }
    },

    watch: {
      active(v){
        let children = this.$children;
        if (v) {
          children.forEach((child,index)=>{
            child.$el.style.transform = this.trans+100*(index+1)+'%)';
          })
        } else {
          children.forEach((child,index)=>{
            child.$el.style.transform = this.trans+'0)';
          })
        }
      }
    },
    computed:{
      trans(){
        switch(this.align) {
          case 'top':
              return 'translateY(';
              break;
          case 'bottom':
              return 'translateY(-';
              break;
          case 'left':
              return 'translateX(';
              break;
          case 'right':
              return 'translateX(-';
              break;
          default:
              return 'translateY(-';
        }
      }
    },

    methods: {
      clickToolbox(){
        this.active = !this.active;
      }
    },

    destroyed() {

    },

    mounted() {

    }
  };
</script>


<style lang="less" scoped>
@import url(../var.less);
  .smui-toolbox {
      overflow: visible;position: relative;
      &-btn {
        height:80px;width:80px;
        color:#FFF;font-size: 48px;
        display: flex;align-items: center;justify-content: center;
        background: @color-primary;
        border-radius: 50%;
      }
      &.active {
        .smui-toolbox-btn {
          opacity:0.8;
        }
      }
      &.top {
        .smui-toolbox-items-wrap {
          top:0;left:0;right:0;flex-direction:column;
        }
        .smui-toolbox-item {
          top:0;
        }
      }
      &.left {
        .smui-toolbox-items-wrap {
          left:0;top:0;bottom:0;flex-direction:row;
        }
        .smui-toolbox-item {
          left:0;
        }
      }
      &.right {
        .smui-toolbox-items-wrap {
          right:0;top:0;bottom:0;flex-direction:row-reverse;
        }
        .smui-toolbox-item {
          right:0;
        }
      }
      &.bottom {
        .smui-toolbox-items-wrap {
          bottom:0;left:0;right:0;flex-direction:column-reverse;
        }
        .smui-toolbox-item {
          bottom:0;
        }
      }
      &-items-wrap {
        position: absolute;z-index: -1;
        display: flex;align-items: center;justify-content: center;
        .smui-toolbox-item {
          position: absolute;height:80px;width:80px;display: flex;align-items: center;justify-content: center;
          transition: all 0.4s;
        }
      }
  }
</style>
