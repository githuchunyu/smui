<template>
    <div class="smui-field">
      <div class="smui-field-con">
        <div class="smui-field-con-icon" v-if="icon!=''">
          <smui-icon :name="icon"></smui-icon>
        </div>
        <div class="smui-field-con-label" v-if="label!=''">{{label}}</div>
        <input class="smui-field-con-input" :placeholder="placeholder" :type="type" v-model="value" v-if="type!='textarea'">
        <textarea class="smui-field-con-textarea" :placeholder="placeholder" v-model="value" v-if="type=='textarea'" :rows="rows"></textarea>
        <div class="smui-field-con-slot">
          <slot></slot>
        </div>
        <div :class="'smui-field-con-state '+state" v-if="state!=''">
          <smui-icon name="warning"></smui-icon>
        </div>
      </div>
      <div class="smui-field-tips" v-if="tips!=''">{{tips}}</div>
    </div>
</template>

<script scoped>
import Icon from '../icon/icon'
export default {
    name:'sm-field',
    components:{
      'smui-icon':Icon,
    },
    data: function () {
        return {
          value:this.v,
        }
    },
    model:{
      prop:"v",
      event:'changeModel',
    },
    watch:{
      v(v){
        this.value = v;
      },
      value(v){
        console.log(0)
        this.$emit('changeModel',v)
      }
    },
    props:{
      v:{
        type:[String,Number],
        default:'',
      },
      label:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      },
      placeholder:{
        type:String,
        default:'请输入内容'
      },
      icon:{
        type:String,
        default:''
      },
      state:{
        type:String,
        default:''
      },
      tips:{
        type:String,
        default:'',
      },
      rows:{
        type:Number,
        default:1,
      }

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
  .smui-field {
    &-con {
      display: flex;align-items: center;
      border-bottom:1px solid #EEE;
      font-size: 28px;
      &-icon {
        width:80px;text-align: center;
      }
      &-label {
        color:#333;width:160px;font-weight: bold;
      }
      &-input {
        border:none;outline: none;
        flex:1;
        height:80px;
        min-width:200px;
      }
      &-textarea {
        border:none;outline: none;
        flex:1;resize: none;
      }
      &-state {
        &.success {
          color:@color-success;
        }
        &.warning {
          color:@color-warning;
        }
        &.error {
          color:@color-error;
        }
      }
    }
    &-tips {
      color:@color-error;margin-top:4px;
    }
  }
</style>
