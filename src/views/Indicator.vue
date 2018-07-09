<template>
  <div class="page">

    <sm-header title="Indicator"></sm-header>

    <h4>各种提示</h4>
    <div>
        <sm-button type="default" long @click="toast1">常规提示</sm-button>
        <sm-button type="default" long @click="toast2">自定义图标</sm-button>
        <sm-button type="default" long @click="toast3">纯文字提示</sm-button>
        <sm-button type="default" long @click="toast4">无文字提示</sm-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  methods:{
    toast1(){
        this.$indicator.open({
          text: '常规提示',
        });
        setTimeout(()=>{
          this.$indicator.close();
        },3000)
    },
    toast2(){
        this.$indicator.open({
          text: '自定义图标',
          icon:'circle-notch'
        });
        setTimeout(()=>{
          this.$indicator.close();
        },3000)
    },
    toast3(){
        this.$indicator.open({
          text: '纯文字提示',
          icon:''
        });
        setTimeout(()=>{
          this.$indicator.close();
        },3000)
    },
    toast4(){
        this.$indicator.open({
          text: '',
        });
        setTimeout(()=>{
          this.$indicator.close();
        },3000)
    },
  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
    }
</style>
