<template>
  <div :class="'smui-range '+(disabled?'disabled':'')">
    <div class="smui-range-label">
      <slot name="label"></slot>
    </div>
    <div class="smui-range-start">
      <slot name="start"></slot>
    </div>
    <div class="smui-range-content" ref="content">
      <div class="smui-range-runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
      <div class="smui-range-progress" :style="{ width: progress + '%', height: barHeight + 'px' }"></div>
      <div class="smui-range-thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
    </div>
    <div class="smui-range-end">
      <slot name="end"></slot>
    </div>

  </div>
</template>

<script>
  import draggable from '../dragable';

  export default {
    name: 'sm-range',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number
      },
      barHeight: {
        type: Number,
        default: 1
      }
    },

    computed: {
      progress() {
        const value = this.value;
        if (typeof value === 'undefined' || value === null) return 0;
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      }
    },

    mounted() {
      const thumb = this.$refs.thumb;
      const content = this.$refs.content;

      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();
        return {
          left: thumbBox.left - contentBox.left,
          top: thumbBox.top - contentBox.top,
          thumbBoxLeft: thumbBox.left
        };
      };

      let dragState = {};
      draggable(thumb, {
        start: (event) => {
          if (this.disabled) return;
          const position = getThumbPosition();
          const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
          dragState = {
            thumbStartLeft: position.left,
            thumbStartTop: position.top,
            thumbClickDetalX: thumbClickDetalX
          };
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
          const stepCount = Math.ceil((this.max - this.min) / this.step);
          const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);

          let newProgress = newPosition / contentBox.width;

          if (newProgress < 0) {
            newProgress = 0;
          } else if (newProgress > 1) {
            newProgress = 1;
          }

          this.$emit('input', Math.round(this.min + newProgress * (this.max - this.min)));
        },
        end: () => {
          if (this.disabled) return;
          this.$emit('change', this.value);
          dragState = {};
        }
      });
    }
  };
</script>


<style lang="less" scoped>

  .smui-range {
    position: relative;
    display: flex;align-items: center;
    // height: 30px;
    // line-height: 30px;

    > * {
      display: flex;
      display: -webkit-box;
    }

    &-start {
      margin-right: 5px;
      font-size: 28px;
    }

    &-end {
      margin-left: 5px;
      font-size: 28px;
    }

    &-content {
      position: relative;
      flex: 1;
      margin-right: 30px;
    }

    &-runway {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: -30px;
      border-top-color: #a9acb1;
      border-top-style: solid;
    }

    &-thumb {
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      transform: translateY(-50%);
      border-radius: 100%;
      cursor: move;
      box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }

    &-progress {
      position: absolute;
      display: block;
      background-color: #26a2ff;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
    }

    &.disabled {
      opacity: 0.5;
    }
  }

</style>
