<template>
    <div class="smui-page">
      <div class="smui-page-prev" @click="clickPrev" :class="{'disabled':disableLeft}"><sm-icon name="chevron-left"></sm-icon></div>
      <div class="smui-page-pages">
        <ul>
          <li class="smui-page-item" :class="{'active':value==0}" @click="clickPage(0)">1</li>
          <li class="smui-page-item" v-if="showLeft">…</li>
          <li class="smui-page-item" :class="{'active':value==i+fromPage}" v-for="(p,i) in centerCount" :key="i" @click="clickPage(i+fromPage)">{{i+1+fromPage}}</li>
          <li class="smui-page-item" v-if="showRight">…</li>
          <li class="smui-page-item" v-if="count>1" :class="{'active':value==count-1}" @click="clickPage(count-1)">{{count}}</li>
        </ul>
      </div>
      <div class="smui-page-next" @click="clickNext" :class="{'disabled':disableRight}"><sm-icon name="chevron-right"></sm-icon></div>
    </div>
</template>

<script scoped>
import Icon from '../icon/icon'
export default {
    name:'sm-page',
    components:{
      'smui-icon':Icon,
    },
    data: function () {
        return {
          value:this.pageNum,
        }
    },
    watch:{

    },
    props:{
      total:{
        type:Number,
        default:1,
      },
      'page-size':{
        type:Number,
        default:20
      },
      'page-num':{
        type:Number,
        default:0,
      }
    },
    computed:{
      count(){
        return Math.ceil(this.total/this.pageSize);
      },
      disableLeft(){
        return this.value==0;
      },
      disableRight(){
        return this.value==this.count-1;
      },
      showLeft(){
        return this.value>4;
      },
      showRight(){
        return this.count>8 && this.value<this.count-4;
      },
      centerCount(){
        let c = Math.max(0,Math.min(this.count-2,7));
        if (this.showLeft) {c--;}
        if (this.showRight) {c--;}
        return c;
      },
      fromPage(){
        if (!this.showLeft) {
          return 1;
        }
        if (!this.showRight) {
          return this.count-7;
        }
        return this.value-2;
      }
    },
    methods: {
      clickPage(v){
        this.value = v;
        this.$emit('on-change',v);
      },
      clickPrev(){
        if (this.value>0) {
          this.value--;
          this.$emit('on-change',this.value);
        }
      },
      clickNext(){
        if (this.value<this.count-1) {
          this.value++;
          this.$emit('on-change',this.value);
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
  .smui-page {
    display: flex;font-size: 28px;justify-content: center;
    &-prev,&-next {
      display: flex;justify-content: center;align-items: center;
      height:64px;width:64px;
      background: #FFF;color:#666;
      &.disabled {
        color:#CCC;
      }
    }
    &-pages {
      ul {
        height:64px;display: flex;align-items:center;
        li {
          margin:0 6px;height:48px;width:48px;text-align:center;line-height: 48px;
          color:#888;border-radius: 50%;
          transition: background-color 0.4s;
          &.active {
            background-color: @color-primary;color:#FFF;
          }
        }
      }
    }
  }
</style>
