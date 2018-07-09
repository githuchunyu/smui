<template>
  <div class="page">

    <sm-header title="Progress"></sm-header>

    <h4>默认</h4>
    <sm-progress v-model="value0"></sm-progress>

    <h4>左右文字</h4>
    <sm-progress v-model="value1">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </sm-progress>

    <h4>定义高度</h4>
    <sm-progress v-model="value2" :barHeight="4">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </sm-progress>

    <h4>带标签</h4>
    <sm-progress v-model="value3" :barHeight="36" :label="'正在下载中'+value3.toFixed(2)+'%'"></sm-progress>

  </div>
</template>

<script>
export default {
  name: 'home',
  data:()=>{
    return {
      value0:20,
      value1:20,
      value2:70,
      value3:46,
      value4:10,
      value5:0,
      value6:30,
    }
  },
  methods:{
    pollProgress(){
      setInterval(()=>{
        if (this.value3>=100) {
          this.value3 = 0;
        } else {
          this.value3+=0.01;
        }
      },10)
    }
  },
  mounted(){
    this.pollProgress();
  }
}
</script>

<style lang="less" scoped>
    .page {
      padding:80px 20px 20px;
    }
    .label {
      width:120px;
      display: flex;flex-direction: column;
      p {
        &:nth-child(1) {
          font-size: 28px;
        }
        &:nth-child(2) {
          font-size:20px;
          color:#999;
        }
      }
    }
</style>
