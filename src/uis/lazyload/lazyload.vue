<template>
  <div class="smui-lazyload">
    <div class="smui-lazyload-img">
      <img class="ignore" :src="lazySrc" alt="" ref="img">
    </div>

  </div>
</template>

<style lang="less" scoped>
  .smui-lazyload {
    background: #CCC;
    position: relative;
    &-img {
      position: absolute;top:0;left:0;right:0;bottom:0;
      .ignore {
        height:100%;width:100%;
      }
    }
  }
</style>

<script>
  export default {
    name: 'sm-lazyload',
    components: {
    },
    props: {
      src: {
        type: String,
        default: ''
      },
    },

    data() {
      return {
        scrollEventTarget: null,
        loadImage: false,
      };
    },

    computed: {
      showImage(){
        return this.$refs['img'][0].complete;
      },
      lazySrc(){
        if (this.loadImage) {
          return this.src;
        } else {
          return '';
        }
      }
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

      handleScroll() {
        if (this.lazySrc=='' && this.checkBottomReached()) {
          this.loadImage = true;
        }
      },

      init() {
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        this.scrollEventTarget.addEventListener('scroll', this.handleScroll);
        this.handleScroll();

      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return parseInt((document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight) >= parseInt(this.$el.offsetTop)-parseInt(window.getComputedStyle(this.$el).height);
        } else {
          return this.scrollEventTarget.scrollTop+parseInt(window.getComputedStyle(this.scrollEventTarget).height) >= this.$el.offsetTop-parseInt(window.getComputedStyle(this.$el).height);
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
