<template>
  <transition name='indicator'>
    <div class="smui-indicator" v-if="visible">
      <div class="smui-indicator-wrapper">
        <div class="smui-indicator-icon" v-if="icon!=''"><sm-icon :name='icon' :spin="true"></sm-icon></div>
        <div class="smui-indicator-content">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import url(../var.less);
  .smui-indicator {
    position: fixed;left:0;top:0;right:0;bottom:0;
    display: flex;justify-content: center;align-items: center;
    &-wrapper {
      padding:36px 42px;
      background: rgba(0,0,0,0.5);color:#FFF;
      border-radius: 12px;
      text-align: center;
    }
    &-icon {
      font-size: 48px;
    }
    &.indicator-enter-active {
      opacity: 1;
      transition: opacity 0.4s;
    }
    &.indicator-enter,&.indicator-leave-active {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }
</style>


<script scoped>
  import Icon from '../icon'
  export default {
    name:'sm-indicator',
    components:{
      'sm-icon':Icon
    },
    props: {
      text: String,
      icon: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
     
    },
    mounted(){
      
    }
  };
</script>