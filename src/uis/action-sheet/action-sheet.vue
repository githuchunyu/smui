<template>
  <div class="smui-actionsheet">
    <transition name="actionsheet-float">
      <div v-show="currentValue" class="smui-actionsheet-content" ref="content">
        <ul class="smui-actionsheet-list">
          <li v-for="( item, index ) in actions" class="smui-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item.name }}</li>
        </ul>
        <a class="smui-actionsheet-button" @click="cancel" v-if="showCancel">{{ cancelText }}</a>
      </div>
    </transition>
    <div class="smui-actionsheet-mask" v-if="showMask" @click="cancel"></div>
  </div>

</template>

<style lang="less" scoped>
@import url(../var.less);
  .smui-actionsheet {
    position: fixed;top:0;left:0;right:0;height:0;
    &-mask {
      position: fixed;top:0;left:0;right:0;bottom:0;z-index: 1;
      background: rgba(0,0,0,0.5);
    }
    &-content {
      position: fixed;z-index: 2;
      background: #EEE;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      max-height: 100%;
      overflow-y: auto;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;
      transition: transform .3s ease-out;
    }
    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-listitem {
      border-bottom: solid 1px #EEE;
    }

    &-listitem, &-button {
      display: block;
      width: 100%;
      padding:20px;
      font-size: 26px;
      color: #333;
      background-color: #fff;
      &:active {
         background-color: #f0f0f0;
      }
    }
    &-button {
      margin-top:15px;
      background-color: @color-error;color:#FFF;
    }
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

<script>

  export default {
    name: 'mt-actionsheet',
    props: {
      value:{
        type:Boolean,
        default:false,
      },
      showCancel:{
        type: Boolean,
        default: true,
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false,
        showMask:false,
      };
    },

    watch: {
      currentValue(val) {
        if (!val) {
          this.$refs['content'].addEventListener('transitionend', this.handleTran);
        } else {
          this.showMask = true;
          this.$refs['content'].removeEventListener('transitionend', this.handleTran);
        }
      },

      value(val) {
        this.currentValue = val;
      }
    },

    methods: {
      handleTran(){
        console.log(1);
        this.showMask = false;
        this.$emit('input', false);
        this.$refs['content'].removeEventListener('transitionend', this.handleTran);
      },
      itemClick(item, index) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index);
        }
        this.currentValue = false;
      },
      cancel(){
        this.currentValue = false;
      }
    },

    mounted() {
      if (this.value) {
        this.currentValue = true;
      }
    }
  };
</script>
