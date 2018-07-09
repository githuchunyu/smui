<template>
    <div class="smui-cell" @click="clickCell">
      <div class="smui-cell-left">
        <div class="smui-cell-icon">

        </div>
        <div class="smui-cell-title">{{title}}</div>
      </div>
      <div class="smui-cell-right">
        <div class="smui-cell-extra">

        </div>

        <div class="smui-cell-arrow" v-if="arrow">
          <smui-icon name="chevron-right"></smui-icon>
        </div>
      </div>
    </div>
</template>

<script scoped>
import Icon from '../icon/icon'
export default {
    name:'sm-cell',
    components:{
      'smui-icon':Icon,
    },
    data: function () {
        return {

        }
    },
    props:{
      title:{
        type:String,
        required:true,
      },
      icon:{
        type:String,
        required:false,
        default:'',
      },
      arrow:{
        type:Boolean,
        required:false,
        default:true,
      },
      to:{
        type:Object,
        default:{}
      }
    },
    watch:{

    },
    computed:{

    },
    methods: {
      clickCell(){
        if (this.to!={}) {
          this.$router.push(this.to);
        }
      }
    },
    mounted(){
      // console.log(this.$route)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// @import url(../index.less);
  .smui-cell {
    display: flex;align-items: center;justify-content: space-between;
    font-size: 28px;
    border-top:1px solid #EEE;
    border-bottom:1px solid #EEE;
    background: #FFF;
    margin-top:-1px;
    padding:24px;
    &-left {
      display: flex;align-items: center;
    }
    &-right {
    }
  }
</style>
