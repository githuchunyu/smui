<template>
    <div :class="'smui-switch '+(disabled?'disabled':'')" @click="clickSwitch">
      <div :class="'smui-switch-block '+(value?'on':'')"></div>
    </div>
</template>

<script scoped>
export default {
    name:'sm-switch',
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
        this.$emit('changeModel',v)
      }
    },
    props:{
      v:{
        type:Boolean,
        default:false,
      },
      disabled:{
        type:Boolean,
        default:false,
      }
    },
    computed:{

    },
    methods: {
      clickSwitch(){
        if (this.disabled) {
          return;
        }
        this.value = !this.value;
      }
    },
    mounted(){
      // console.log(this.$route)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-switch {
    height:48px;width:80px;
    border:1px solid #DDD;
    border-radius: 24px;
    position: relative;
    display: inline-flex;
    &.disabled {
      opacity:0.6;
      cursor: not-allowed;
    }
    &-block {
      height:48px;width:48px;
      border-radius: 24px;
      position: absolute;top:-1px;right:33px;
      background: #EEE;
      box-shadow: 4px 0 4px rgba(0,0,0,0.2);
      transition:all 0.4s;
      &.on {
        right:-1px;
        background: @color-primary;
        box-shadow: -4px 0 4px rgba(0,0,0,0.2);
      }
    }
  }
</style>
