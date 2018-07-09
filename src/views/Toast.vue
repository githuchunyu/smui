<template>
  <div class="page">

    <sm-header title="Toast"></sm-header>

    <h4>各种提示</h4>
    <div>
        <sm-button type="default" long @click="toast1">顶部提示</sm-button>
        <sm-button type="primary" long @click="toast2">中部提示</sm-button>
        <sm-button type="success" long @click="toast3">底部提示</sm-button>
        <sm-button type="warning" long @click="toast4">带图标提示</sm-button>
        <sm-button type="error" long @click="toast5">持续5秒</sm-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  methods:{
    toast1(){
        this.$toast({
          message: '顶部提示',
          position: 'top',
          duration: 3000
        });
    },
    toast2(){
        this.$toast({
          message: '中部提示',
          position: 'middle',
          type:'primary',
          duration: 3000
        });
    },
    toast3(){
        this.$toast({
          message: '底部提示',
          position: 'bottom',
          type:'success',
          duration: 3000
        });
    },
    toast4(){
        this.$toast({
          message: '带图标提示',
          position: 'middle',
          type:'warning',
          duration: 3000,
          icon:'users'
        });
    },
    toast5(){
        this.$toast({
          message: '持续5秒',
          position: 'bottom',
          type:'error',
          duration: 5000
        });
    }
  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
    }
</style>
