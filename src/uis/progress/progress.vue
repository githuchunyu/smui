<template>
  <div class="smui-progress">
    <div class="smui-progress-start">
      <slot name="start"></slot>
    </div>
    <div class="smui-progress-content" ref="content" :style="{height: barHeight + 'px' }">
      <div class="smui-progress-progress" :style="{ width: progress + '%'}"></div>
      <div class="smui-progress-label" v-if="label!=''" :style="{height: barHeight + 'px' }">
        <p :style="{ width: progress + '%'}"><span :style="{ left: (5000/progress) + '%'}">{{label}}</span></p>
        <p><span :style="{ right: 5000/(100-progress) + '%'}">{{label}}</span></p>
      </div>
    </div>
    <div class="smui-progress-end">
      <slot name="end"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'sm-progress',
    props: {
      value: {
        type: Number,
        default:0,
      },
      barHeight: {
        type: Number,
        default: 1
      },
      label:{
        type:String,
        efault:''
      }
    },

    computed: {
      progress() {
        const value = this.value;
        return value;
      }
    },

    mounted() {

    }
  };
</script>


<style lang="less" scoped>
@import url(../var.less);
  .smui-progress {
    position: relative;
    display: flex;align-items: center;
    min-height:36px;

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
      background: #EEE;
      position: relative;
    }

    &-progress {
      position: absolute;
      display: block;
      background-color: @color-primary;
      top:0;bottom:0;
      width: 0;
    }
    &-label {
      position: absolute;top:0;left:0;right:0;bottom:0;
      display: flex;
      p {
        display: flex;align-items: center;
        overflow: hidden;position: relative;
        &:nth-child(1) {
          color:#FFF;
          span {
            width:400px;text-align: center;
            position: absolute;transform:translateX(-50%);
          }
        }
        &:nth-child(2) {
          flex:1;
          color:@color-primary;
          span {
            width:400px;text-align: center;
            position: absolute;transform:translateX(50%);
          }
        }
      }
    }

  }

</style>
