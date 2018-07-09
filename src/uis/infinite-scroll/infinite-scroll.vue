<template>
  <div class="smui-infinite-scroll">
    <div class="smui-infinite-scroll-content">
      <slot></slot>
    </div>
    <slot name="bottom">
      <div class="smui-infinite-scroll-bottom" v-if="showLoading && !allLoaded">
        <spinner class="smui-infinite-scroll-spinner" :size="20" type="fading-circle"></spinner>
        <span class="smui-infinite-scroll-text">{{ loadingText }}</span>
      </div>
      <div class="smui-infinite-scroll-bottom" v-if="allLoaded">
        <span class="smui-infinite-scroll-text">{{ completeText }}</span>
      </div>
    </slot>
  </div>
</template>

<style lang="less" scoped>
  .smui-infinite-scroll {
      overflow: hidden;position: relative;
      &-content {
        background: #FFF;position: relative;z-index: 2;
      }
      &-bottom {
        text-align: center;
        height: 100px;
        line-height: 100px;
      }
      &-spinner {
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
      }

      &-text {
        vertical-align: middle;
      }

  }
</style>

<script>
  import spinner from '../spinner';
  export default {
    name: 'sm-infinite-scroll',
    components: {
      'spinner': spinner
    },
    props: {
      loadingText: {
        type: String,
        default: '加载中...'
      },
      completeText: {
        type: String,
        default: '没有更多了'
      },
      triggerDistance: {
        type: Number,
        default: 0
      },
      allLoaded: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        scrollEventTarget: null,
        showLoading: false,
      };
    },

    computed: {

    },

    watch: {

    },

    methods: {
      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },

      handleScroll(event) {
        if (!this.showLoading && this.checkBottomReached() && !this.allLoaded) {
          this.showLoading = true;
          if (this.triggerDistance==0) {
            this.$nextTick(()=>{
              this.scrollEventTarget.scrollTop = this.scrollEventTarget.scrollHeight;
            })
          }
          this.$emit('on-loading');
        }
      },

      init() {
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        this.scrollEventTarget.addEventListener('scroll', this.handleScroll);
      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.documentElement.scrollTop || document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight-this.triggerDistance;
        } else {
          return parseInt(this.$el.getBoundingClientRect().bottom) <= parseInt(this.scrollEventTarget.getBoundingClientRect().bottom) + 1 + this.triggerDistance;
        }
      },
    },

    mounted() {
      this.init();
    },
    beforeDestroy(){
      this.scrollEventTarget.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>
