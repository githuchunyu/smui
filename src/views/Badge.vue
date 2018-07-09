<template>
  <div class="page">

    <sm-header title="Bage"></sm-header>

    <h4>各种徽章</h4>
    <div>
      <div class="item">
        <span>任务</span>
        <sm-badge label="完成"></sm-badge>
      </div>
      <div class="item">
        <span>消息</span>
        <sm-badge label="3" type="success"></sm-badge>
      </div>
      <div class="item">
        <span>完成</span>
        <sm-badge label="No" type="warning"></sm-badge>
      </div>
      <div class="item">
        <span>错误</span>
        <sm-badge label="++" type="error"></sm-badge>
      </div>
    </div>

    <h4>圆角徽章</h4>
    <div>
      <div class="item">
        <span>任务</span>
        <sm-badge label="完成" circle></sm-badge>
      </div>
      <div class="item">
        <span>消息</span>
        <sm-badge label="3" type="success" circle></sm-badge>
      </div>
      <div class="item">
        <span>完成</span>
        <sm-badge label="No" type="warning" circle></sm-badge>
      </div>
      <div class="item">
        <span>错误</span>
        <sm-badge label="++" type="error" circle></sm-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'views-header',
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .item {
      display: flex;align-items: center;
      font-size: 36px;margin:0 48px;
    }
</style>
