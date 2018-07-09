<template>
    <div :class="'smui-radio '+align">
      <ul>
        <li :class="o.disabled?'disabled':''" v-for="o in option" :key="o.value" @click="clickRadio(o)">
          <div class="smui-radio-icon">
            <div :class="'smui-radio-icon-select '+(o.value==value?'on':'')"></div>
          </div>
          <span class="smui-radio-text">{{o.label}}</span>
        </li>
      </ul>
    </div>
</template>

<script scoped>
export default {
    name:'sm-radio',
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
      option:{
        type:Array,
        default:()=>{return [];}
      },
      align:{
        type:String,
        default:'left'
      }
    },
    computed:{

    },
    methods: {
      clickRadio(o){
        if (o.disabled) {
          return;
        }
        this.value = o.value;
      }
    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-radio {
    background:#FFF;
    border-top:1px solid #EEE;
    border-bottom:1px solid #EEE;
    font-size: 26px;
    padding:0 24px;
    position: relative;
    &.right {
      .smui-radio-icon {
        position: absolute;right:10px;
      }
    }
    li {
      border-top:1px solid #EEE;
      height:80px;
      display: flex;
      align-items: center;
      &:nth-child(1) {
        border:none;
      }
      span {
        line-height: 1;
      }
      &.disabled {
        &>* {
          opacity: 0.3;
        }
      }
    }
    &-icon {
      position: relative;
      height:36px;width:36px;border-radius: 18px;
      border:1px solid #CCC;margin-right:12px;
      &-select {
        transition: all 0.4s;
        position: absolute;top:-1px;bottom:-1px;left:-1px;right:-1px;border-radius: 50%;
        background: @color-primary;
        opacity:0;
        transform:scale(0.4);
        &.on {
          transform:scale(1);
          opacity:1;
        }
        &:after {
          content:'';position: absolute;top:9px;left:9px;height:18px;width:18px;background:#FFF;
          border-radius: 50%;
        }
      }

    }
  }
</style>
