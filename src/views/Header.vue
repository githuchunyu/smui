<template>
  <div class="page">

    <sm-header title="Header"></sm-header>
    <h4>各种顶部</h4>
    <div class="header"><sm-header :fixed="false" title="文字如果过多的话超出范围的文字会显示省略号省略号省略号省略号"></sm-header></div>
    <div class="header"><sm-header :fixed="false" :showBack="false" title="不显示返回按钮"></sm-header></div>
    <div class="header"><sm-header :fixed="false" :showMore="false" title="不显示更多按钮"></sm-header></div>
    <div class="header"><sm-header :fixed="false" :showBackText="true" title="显示返回"></sm-header></div>
    <div class="header"><sm-header :fixed="false" moreText="更多" title="自定义更多文字"></sm-header></div>
    <div class="header"><sm-header :fixed="false" background="#19be6b" color="#FFF" title="自定义色彩"></sm-header></div>
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
  .header {
    margin:15px 0;
  }
</style>
