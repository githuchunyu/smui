<template>
    <div :class="'smui-header '+fixedClass" :style="colorStyle">
      <div class="smui-header-back" v-if="showBack" @click="clickBack">
        <sm-icon class="smui-header-icon" name='chevron-left'></sm-icon>
        <span v-if="showBackText">返回</span>
      </div>

      <div class="smui-header-title">{{title}}</div>
      <slot class="smui-header-other" name="other"></slot>
      <div class="smui-header-more" v-if="showMore" @click="clickMore">
        <sm-icon class="smui-header-icon" v-if="moreText==''" :name='moreIcon'></sm-icon>
        <span v-else>{{moreText}}</span>
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

        }
    },
    props:{
      moreIcon:{
        type:String,
        default:'ellipsis-h',
      },
      moreText:{
        type:String,
        default:''
      },
      title:{
        type:String,
        required:false,
        default:'',
      },
      showMore:{
        type:Boolean,
        default:true,
      },
      showBack:{
        type:Boolean,
        default:true,
      },
      showBackText:{
        type:Boolean,
        default:false,
      },
      fixed:{
        type:Boolean,
        default:true,
      },
      background:{
        type:String,
        default:'',
      },
      color:{
        type:String,
        default:'',
      }
    },
    watch:{

    },
    computed:{
      fixedClass(){
        return this.fixed?'fixed':'';
      },
      colorStyle(){
        let s = '';
        if (this.background!='') {
          s+='background:'+this.background+';'
        }
        if (this.color!='') {
          s+='color:'+this.color+';'
        }
        return s;
      }
    },
    methods: {
      clickBack(){
        this.$router.go(-1);
        this.$emit('click-back');
      },
      clickMore(){
        this.$emit('click-more');
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
  .smui-header {
    height:80px;
    position: relative;
    padding:0 120px;
    display: flex;
    align-items: center;
    background-color: @color-primary;color:#FFF;
    font-size:28px;
    &.fixed {
      position: fixed;top:0;left:0;right:0;z-index: 9999;
    }
    &-back {
      position: absolute;top:0;bottom:0;left:0;line-height: 80px;
      padding:0 8px;
      display: flex;
    }
    &-more {
      position: absolute;top:0;bottom:0;right:0;line-height: 80px;
      padding:0 8px;
    }
    &-title {
      flex:1;
      text-align: center;
      text-overflow:ellipsis;overflow:hidden;white-space:nowrap;
    }
    &-ohter {
      position: absolute;top:0;bottom:0;right:48px;
    }
    &-icon {
      margin:0 8px;
    }
  }
</style>
