<template>
  <div class="page">
    <sm-header title="Button"></sm-header>
    <h4>小按钮</h4>
    <div>
        <sm-button size="small">按钮</sm-button>
        <sm-button type="primary" size="small">按钮</sm-button>
        <sm-button type="success" size="small">按钮</sm-button>
        <sm-button type="warning" size="small">按钮</sm-button>
        <sm-button type="error" size="small">按钮</sm-button>
        <sm-button type="text" size="small">按钮</sm-button>
    </div>

    <h4>普通状态</h4>
    <div>
        <sm-button>按钮</sm-button>
        <sm-button type="primary">按钮</sm-button>
        <sm-button type="success">按钮</sm-button>
        <sm-button type="warning">按钮</sm-button>
        <sm-button type="error">按钮</sm-button>
    </div>

    <h4>大按钮</h4>
    <div>
        <sm-button size="large">按钮</sm-button>
        <sm-button type="primary" size="large">按钮</sm-button>
        <sm-button type="success" size="large">按钮</sm-button>
        <sm-button type="warning" size="large">按钮</sm-button>
        <sm-button type="error" size="large">按钮</sm-button>
    </div>

    <h4>禁用状态</h4>
    <div>
        <sm-button disabled>按钮</sm-button>
        <sm-button type="primary" disabled>按钮</sm-button>
        <sm-button type="success" disabled>按钮</sm-button>
        <sm-button type="warning" disabled>按钮</sm-button>
        <sm-button type="error" disabled>按钮</sm-button>
    </div>

    <h4>直角按钮</h4>
    <div>
        <sm-button square>按钮</sm-button>
        <sm-button type="primary" square>按钮</sm-button>
        <sm-button type="success" square>按钮</sm-button>
        <sm-button type="warning" square>按钮</sm-button>
        <sm-button type="error" square>BUTTON</sm-button>
    </div>

    <h4>边框状态</h4>
    <div>
        <sm-button border>按钮</sm-button>
        <sm-button type="primary" border>按钮</sm-button>
        <sm-button type="success" border>按钮</sm-button>
        <sm-button type="warning" border>按钮</sm-button>
        <sm-button type="error" border>按钮</sm-button>
        <sm-button type="text" border>按钮</sm-button>
    </div>

    <h4>圆角状态</h4>
    <div>
        <sm-button type="primary" circle size="small">按钮</sm-button>
        <sm-button type="primary" circle size="normal">按钮</sm-button>
        <sm-button type="primary" circle size="large">按钮</sm-button>
    </div>

    <h4>带图标</h4>
    <div>
        <sm-button type="primary" icon="users">按钮</sm-button>
        <sm-button type="primary" :loading="true">按钮</sm-button>
    </div>

    <h4>长按钮</h4>
    <div>
        <sm-button type="primary" long size="small">按钮</sm-button>
        <sm-button type="primary" long>按钮</sm-button>
        <sm-button type="primary" long size="large">按钮</sm-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .page {
        text-align: left;
        padding:20px;
        padding-top:80px;
        h4 {
            color:#999;
            text-align: center;
            margin:20px 0 8px 0;
        }

    }
</style>
