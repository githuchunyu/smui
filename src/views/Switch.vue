<template>
  <div class="page">

    <sm-header title="Switch"></sm-header>

    <h4>开关</h4>
    <div class="item">
        <sm-switch v-model="state1"></sm-switch><span>{{state1}}</span>
    </div>
    <div class="item">
        <sm-switch v-model="state2"></sm-switch><span>{{state2}}</span>
    </div>

    <h4>禁止开关</h4>
    <div class="item">
        <sm-switch v-model="state1" disabled></sm-switch><span>{{state1}}</span>
    </div>
    <div class="item">
        <sm-switch v-model="state2" disabled></sm-switch><span>{{state2}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data:()=>{
    return {
      state1:false,
      state2:true,
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
        .item {
          display: flex;align-items: center;
          margin:8px 0;
          span {
             margin-left:8px;
          }
        }

    }
</style>
