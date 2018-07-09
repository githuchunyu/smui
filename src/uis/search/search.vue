<template>
    <div :class="'smui-search '+(active?'active ':' ')+(circle?'circle ':' ')+(short?'short':'')">
      <div class="smui-search-con">
        <div class="smui-search-con-icon">
          <smui-icon name="search"></smui-icon>
        </div>
        <input class="smui-search-con-input" :placeholder="short&&!active?'':placeholder" v-model="value" @focus="focus" @blur="blur">
        <div class="smui-search-con-cancel" v-if="active && value!=''" @click="clear"><smui-icon name="close"></smui-icon></div>

      </div>
      <div class="smui-search-btn">搜索</div>
    </div>
</template>

<script scoped>
import Icon from '../icon/icon'
export default {
    name:'sm-search',
    components:{
      'smui-icon':Icon,
    },
    data: function () {
        return {
          value:this.v,
          active:false,
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
      placeholder:{
        type:String,
        default:'请输入内容'
      },
      circle:{
        type:Boolean,
        default:false,
      },
      short:{
        type:Boolean,
        default:false,
      },
    },
    computed:{

    },
    methods: {
      focus(){
        this.active = true;
      },
      blur(){
        this.active = false;
      },
      clear(){
        this.value = '';
      }
    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-search {
    display: flex;height:80px;
    overflow: hidden;
    transition: all 0.4s;
    &.short {
      width:240px;
      .smui-search-con {
        width:120px;
      }
      &.active {
        width:100%;
      }
    }
    &.active {
      .smui-search-con {
        border:1px solid @color-primary;
        border-right:none;
      }
    }
    &.circle {
      border-radius: 40px;
      .smui-search-con {
        border-radius: 40px 0 0 40px;
        &-cancel {
          width:64px;text-align: center;
          position: absolute;right:0;
          color:#AAA;margin-right:40px;
        }
      }
      .smui-search-btn {
        position:relative;z-index: 1;
        border-radius: 40px 0 0 40px;
        margin-left:-40px;
      }
    }
    &-con {
      flex:1;
      display: flex;align-items: center;
      border:1px solid #CCC;
      border-right:none;
      font-size: 28px;
      position: relative;
      transition: all 0.4s;
      &-icon {
        width:80px;text-align: center;
        color:#888;
      }
      &-input {
        box-sizing: border-box;
        border:none;outline: none;
        flex:1;
        height:100%;
        min-width:60px;
      }
      &-cancel {
        width:64px;text-align: center;
        position: absolute;right:0;
        color:#AAA;
      }
    }
    &-btn {
      background: @color-primary;color:#FFF;width:120px;
      height:100%;display: flex;justify-content: center;align-items: center;
      font-size: 28px;
    }
  }
</style>
