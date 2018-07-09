<template>
    <div class="smui-tabbar" :style="colorStyle">
      <div :class="'smui-tabbar-item '+(i==activeIndex?'active':'')" v-for="(l,i) in list" :key="l.title" @click="clickTab(i)">
        <div v-if="l.type=='img'" class="smui-tabbar-item-img">
          <img src="" alt="">
        </div>
        <div v-else class="smui-tabbar-item-icon">
          <sm-icon :name="l.value"></sm-icon>
        </div>
        <div class="smui-tabbar-item-title">{{l.title}}</div>
      </div>
    </div>
</template>

<script scoped>
import Icon from '../icon'
export default {
    name:'sm-header',
    components:{
      'sm-icon':Icon,
    },
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
      clickTab(i){
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
  .smui-tabbar {
    height:80px;
    position: fixed;bottom:0;left:0;right:0;
    background: @color-primary;color:#FFF;
    display: flex;
    &-item {
      flex:1;
      display: flex;flex-direction: column;justify-content: center;align-items: center;
      opacity: 0.6;
      transition: opacity 0.2s;
      &.active {
        opacity: 1;
      }
      &-icon {
        font-size:32px;
      }
      &-title {
        font-size:16px;
      }
    }
  }
</style>
