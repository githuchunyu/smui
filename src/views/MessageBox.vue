<template>
  <div class="page">

    <sm-header title="MessageBox"></sm-header>

    <h4>各种提示</h4>
    <div>
        <sm-button type="default" long @click="messagebox1">ALERT</sm-button>
        <sm-button type="default" long @click="messagebox2">CONFIRM</sm-button>
        <sm-button type="default" long @click="messagebox3">PROMPT</sm-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  methods:{
    messagebox1(){
        this.$messagebox.alert('提交成功！');
    },
    messagebox2(){
        this.$messagebox.confirm('是否确定删除？')
        .then(()=>{
          alert('你确定了')
        })
        .catch(()=>{
          alert('你取消了');
        });
    },
    messagebox3(){
        this.$messagebox.prompt('请输入您的姓名')
        .then((input)=>{
          alert('你的名字是:'+input.value);
        })
        .catch(()=>{
          alert('你取消了');
        });
    },
  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
    }
</style>
