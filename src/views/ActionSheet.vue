<template>
  <div class="page">

    <sm-header title="ActionSheet"></sm-header>

    <h4>各种底部菜单</h4>
    <div>
        <sm-button type="default" long @click="as1">一般情况下</sm-button>
        <sm-button type="default" long @click="as2">无取消按钮</sm-button>
    </div>

    <sm-actionsheet v-model="asVisible1" :actions="actions"></sm-actionsheet>
    <sm-actionsheet v-model="asVisible2" :actions="actions" :show-cancel="false"></sm-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data:()=>{
    return {
      asVisible1:false,
      asVisible2:false,
      actions:[
        {name:'操作1',method:()=>{alert(1);}},
        {name:'操作2',method:()=>{alert(2);}}
      ],
    }
  },
  methods:{
    as1(){
      this.asVisible1 = true;
    },
    as2(){
      this.asVisible2 = true;
    },
  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
    }
</style>
