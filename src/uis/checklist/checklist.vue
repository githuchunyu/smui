<template>
    <div :class="'smui-checklist '+align">
      <ul>
        <li :class="o.disabled?'disabled':''" v-for="o in option" :key="o.value" @click="clickChecklist(o)">
          <div class="smui-checklist-icon">
            <div :class="'smui-checklist-icon-select '+(value.indexOf(o.value)>=0?'on':'')"></div>
          </div>
          <span class="smui-checklist-text">{{o.label}}</span>
        </li>
      </ul>
    </div>
</template>

<script scoped>
export default {
    name:'sm-checklist',
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
        type:Array,
        default:()=>{return [];}
      },
      option:{
        type:Array,
        default:()=>{return [];}
      },
      max:{
        type:Number,
        default:10,
      },
      align:{
        type:String,
        default:'left'
      }
    },
    computed:{

    },
    methods: {
      clickChecklist(o){
        if (o.disabled) {
          return;
        }
        let v= o.value;
        let i = this.value.indexOf(v);
        if (i>=0) {
          this.value.splice(i,1);
        } else {
          if (this.value.length>=this.max) {
            return;
          }
          this.value.push(v);
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
@import url(../var.less);
  .smui-checklist {
    background:#FFF;
    border-top:1px solid #EEE;
    border-bottom:1px solid #EEE;
    font-size: 26px;
    padding:0 24px;
    position: relative;
    &.right {
      .smui-checklist-icon {
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
          content:'';position: absolute;top:9px;left:9px;height:10px;width:18px;border:1px solid transparent;
          border-left:1px solid #FFF;border-bottom:1px solid #FFF;
          transform: rotateZ(-45deg);
        }
      }

    }
  }
</style>
