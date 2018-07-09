<template>
    <div :class="'smui-button '+classText" @click="click">
      <sm-icon class="smui-button-icon" v-if="icon!=''&&!loading" :name='icon'></sm-icon>
      <sm-icon class="smui-button-icon" v-if="loading" name='spinner' :spin="true"></sm-icon>
      <label class="smui-button-content">
        <slot></slot>
      </label>
    </div>
</template>

<script scoped>
import Icon from '../icon'
export default {
    name:'sm-button',
    components:{
      'sm-icon':Icon,
    },
    data: function () {
        return {

        }
    },
    props:{
      // 是否是边线模式
      line:{
        type:Boolean,
        required:false,
        default:false,
      },
      icon:{
        type:String,
        required:false,
        default:'',
      },
      size:{
        type:String,
        default:'normal'
      },
      // 按钮类型
      type:{
        type:String,
        required:false,
        default:'default',
      },
      disabled:{
        type:Boolean,
        default:false,
      },
      circle:{
        type:Boolean,
        default:false,
      },
      border:{
        type:Boolean,
        default:false,
      },
      long:{
        type:Boolean,
        default:false,
      },
      square:{
        type:Boolean,
        default:false,
      },
      loading:{
        type:Boolean,
        default:false,
      }
    },
    watch:{

    },
    computed:{
      classText(){
        let c = [];
        c.push(this.disabled?'disabled':'');
        c.push(this.circle?'circle':'');
        c.push(this.border?'border':'');
        c.push(this.long?'long':'');
        c.push(this.square?'square':'');
        c.push(this.type);
        c.push(this.size);
        c.push(this.line?'border':'');
        return c.join(' ');
      }
    },
    methods: {
      click(){
        if (!this.disabled) {
          this.$emit('click');
        }
      }
    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-button {
    display: inline-flex;
    margin:4px 0;
    box-sizing: border-box;
    .smui-button-content {
      display: flex;align-items:center;
      line-height: 1;
    }
    &.long {
      display: flex;
    }
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color:#FFF;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.8;
    }
    &.square {
      border-radius: 0;
    }
    &.normal {
      height:@height-normal;padding:0  @height-normal/2;font-size: @font-normal;
      &.circle {
        border-radius: @height-normal/2;
      }
    }
    &.small {
      height:@height-small;padding:0 @height-small/2;font-size: @font-small;
      &.circle {
        border-radius: @height-small/2;
      }
    }
    &.large {
      height:@height-large;padding:0 @height-large/2;font-size: @font-large;
      &.circle {
        border-radius: @height-large/2;
      }
    }
    &.default {
      background-color:@color-background;
      color:@color-title;
      &.border {
        border:1px solid @color-border;
      }
    }

    &.primary {
      background-color:@color-primary;
      &.border {
        color:@color-primary;
        border:1px solid @color-primary;
      }
    }
    &.success {
      background-color:@color-success;
      &.border {
        color:@color-success;
        border:1px solid @color-success;
      }
    }
    &.warning {
      background-color:@color-warning;
      &.border {
        color:@color-warning;
        border:1px solid @color-warning;
      }
    }
    &.error {
      background-color:@color-error;
      &.border {
        color:@color-error;
        border:1px solid @color-error;
      }
    }
    &.text {
      background-color:transparent;color:@color-primary;
      &.border {
        border-bottom:1px solid @color-primary;
      }
    }
    &.border {
        padding-top:1px;
        background-color: transparent;
    }

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &-icon {
     width:40px;
    }
  }
</style>
