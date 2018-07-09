<template>
  <div class="page">

    <sm-header title="search"></sm-header>

    <h4>直角搜索框</h4>
    <div style="margin:12px 48px 48px 48px;">
        <sm-search></sm-search>
    </div>

    <h4>圆角搜索框</h4>
    <div style="margin:12px 48px 48px 48px;">
        <sm-search circle></sm-search>
    </div>

    <h4>点击边长搜索框</h4>
    <div style="margin:12px 48px 48px 48px;">
        <sm-search circle short></sm-search>
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
    .page {
        padding-top:80px;
        text-align: left;
        h4 {
            color:#999;
            text-align: center;
            margin:20px 0 8px 0;
        }
    }
</style>
