<template>
  <div class="page">

    <sm-header title="Page"></sm-header>

    <h4>基本分页</h4>
    <div style="margin:12px 0 32px;">
        <sm-page :total="200"></sm-page>
    </div>

    <h4>页数少时</h4>
    <div style="margin:12px 0 32px;">
        <sm-page :total="20"></sm-page>
        <sm-page :total="40"></sm-page>
    </div>

    <h4>自定义页容</h4>
    <div style="margin:12px 0 32px;">
        <sm-page :total="100" :page-size="20"></sm-page>
        <sm-page :total="100" :page-size="50"></sm-page>
    </div>

    <h4>自定义初始页码</h4>
    <div style="margin:12px 0 32px;">
        <sm-page :total="100" :page-size="20" :page-num="2"></sm-page>
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

</style>
