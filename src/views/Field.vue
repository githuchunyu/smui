<template>
  <div class="page">

    <sm-header title="Field"></sm-header>

    <h4>普通输入框</h4>
    <div>
        <sm-field v-model="o" label="姓名"></sm-field>
    </div>

    <h4>无标签输入框</h4>
    <div>
        <sm-field v-model="o" placeholder="请输入姓名"></sm-field>
    </div>

    <h4>图标输入框</h4>
    <div>
        <sm-field v-model="o" icon="users" placeholder="请输入姓名"></sm-field>
    </div>

    <h4>密码</h4>
    <div>
        <sm-field v-model="o" label="密码" placeholder="请输入密码" type="password"></sm-field>
    </div>

    <h4>日期时间</h4>
    <div>
        <sm-field v-model="o" label="日期" type="date"></sm-field>
        <sm-field v-model="o" label="时间" type="time"></sm-field>
        <sm-field v-model="o" label="日期时间" type="datetime-local"></sm-field>
    </div>

    <h4>数字</h4>
    <div>
        <sm-field v-model="o" label="数字" type="number"></sm-field>
    </div>

    <h4>颜色</h4>
    <div>
        <sm-field v-model="o" label="颜色" type="color"></sm-field>
    </div>

    <h4>状态提示</h4>
    <div>
        <sm-field v-model="o" label="姓名" state="success"></sm-field>
        <sm-field v-model="o" label="姓名" state="warning"></sm-field>
        <sm-field v-model="o" label="姓名" state="error" tips="您的输入有误"></sm-field>
    </div>

    <h4>文本框</h4>
    <div>
        <sm-field v-model="o" label="评论内容" type="textarea" :rows="3"></sm-field>
    </div>

    <h4>附加内容</h4>
    <div>
        <sm-field v-model="o" label="验证码" placeholder="请输入验证码">
          <sm-button type="default">获取验证码</sm-button>
        </sm-field>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data: ()=>{
    return {
      o:'',
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .page {
        padding:80px 20px 20px;
    }
    .select {
      padding:12px 0;color:#999;
    }
</style>
