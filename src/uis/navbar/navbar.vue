<template>
    <div class="smui-navbar" :style="colorStyle">
      <div :class="'smui-navbar-item '+(i==activeIndex?'active':'')" v-for="(l,i) in list" :key="l" @click="clickNav(i)">{{l}}</div>
    </div>
</template>

<script scoped>
export default {
    name:'sm-navbar',
    data: function () {
        return {
            activeIndex:this.index,
        }
    },
    model:{
      prop:"index",
      event:'changeShow',
    },
    watch:{
      index(v){
        this.activeIndex = v;
      },
      activeIndex(v){
        this.$emit('changeShow',v)
      }
    },
    props:{
      list:{
        type:Array,
        default:[],
      },
      index:{
        type:Number,
        default:0,
      },
      colorStyle:{
        type:Object,
        required:false,
        default:()=>{return {};},
      }
    },
    computed:{

    },
    methods: {
      clickNav(i){
        this.activeIndex = i;
      },
    },
    mounted(){
      // console.log(this.$route)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(../var.less);
  .smui-navbar {
    height:80px;

    display: flex;
    &-item {
      flex:1;
      display: flex;flex-direction: column;justify-content: center;align-items: center;
      border-bottom:4px solid #EEE;color:#333;
      transition: all 0.4s;
      font-size: 24px;
      &.active {
        border-bottom:4px solid @color-primary;color:@color-primary;
        font-weight: bold;
      }
    }
  }
</style>
