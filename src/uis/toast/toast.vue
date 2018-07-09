<template>
  <transition name='toast'>
    <div :class="'smui-toast '+customClass" v-if="visible">
      <div class="smui-toast-icon" v-if="icon!=''"><sm-icon :name='icon'></sm-icon></div>
      <div class="smui-toast-content">{{message}}</div>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import url(../var.less);
  .smui-toast {
    position: fixed;left:50%;transform: translateY(-50%) translateX(-50%);
    max-width:600px;
    text-align: center;
    padding:20px 48px;
    font-size: 24px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    color:#FFF;
    opacity: 0.8;
    &.top {
      top:10%;
    }
    &.middle {
      top:50%;
    }
    &.bottom {
      bottom:10%;
    }
    &-icon {
      font-size: 80px;
    }

    &.default {
      background-color: @color-title;
    }
    &.primary {
      background-color: @color-primary;
    }
    &.success {
      background-color: @color-success;
    }
    &.warning {
      background-color: @color-warning;
    }
    &.error {
      background-color: @color-error;
    }

    &.toast-enter-active {
      opacity: 0.8;
      transition: opacity 0.4s;
    }
    &.toast-enter,&.toast-leave-active {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }
</style>


<script scoped>
  import Icon from '../icon'
  export default {
    name:'toast',
    components:{
      'sm-icon':Icon
    },
    props: {
      message: String,
      type: {
        type: String,
        default: 'default'
      },
      position: {
        type: String,
        default: 'middle'
      },
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
      customClass() {
        let classes = [];
        classes.push(this.position);
        classes.push(this.type);

        return classes.join(' ');
      }
    },
    mounted(){
      
    }
  };
</script>