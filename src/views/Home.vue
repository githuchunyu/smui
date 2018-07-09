<template>
  <div id="home">
    <h2>布局组件</h2>
    <sm-cell title="header" :to="{name:'header'}"></sm-cell>
    <sm-cell title="tabbar" :to="{name:'tabbar'}"></sm-cell>
    <sm-cell title="navbar" :to="{name:'navbar'}"></sm-cell>
    <h2>互动组件</h2>
    <sm-cell title="button" :to="{name:'button'}"></sm-cell>
    <sm-cell title="swipe" :to="{name:'swipe'}"></sm-cell>
    <sm-cell title="toolbox" :to="{name:'toolbox'}"></sm-cell>
    <sm-cell title="search" :to="{name:'search'}"></sm-cell>
    <sm-cell title="page" :to="{name:'page'}"></sm-cell>
    <sm-cell title="loadmore" :to="{name:'loadmore'}"></sm-cell>
    <sm-cell title="infinitescroll" :to="{name:'infinitescroll'}"></sm-cell>
    <sm-cell title="indexlist" :to="{name:'indexlist'}"></sm-cell>
    <h2>显示组件</h2>
    <sm-cell title="progress" :to="{name:'progress'}"></sm-cell>
    <sm-cell title="badge" :to="{name:'badge'}"></sm-cell>
    <sm-cell title="spinner" :to="{name:'spinner'}"></sm-cell>
    <sm-cell title="lazyload" :to="{name:'lazyload'}"></sm-cell>
    <sm-cell title="icon" :to="{name:'icon'}"></sm-cell>
    <h2>弹出组件</h2>
    <sm-cell title="toast" :to="{name:'toast'}"></sm-cell>
    <sm-cell title="indicator" :to="{name:'indicator'}"></sm-cell>
    <sm-cell title="messagebox" :to="{name:'messagebox'}"></sm-cell>
    <sm-cell title="actionsheet" :to="{name:'actionsheet'}"></sm-cell>
    <h2>表单组件</h2>
    <sm-cell title="switch" :to="{name:'switch'}"></sm-cell>
    <sm-cell title="checklist" :to="{name:'checklist'}"></sm-cell>
    <sm-cell title="radio" :to="{name:'radio'}"></sm-cell>
    <sm-cell title="field" :to="{name:'field'}"></sm-cell>
    <sm-cell title="range" :to="{name:'range'}"></sm-cell>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style lang="less">
  #home {
    background: #fafafa;
    height:100%;overflow-y: auto;
  }
  h2 {
    padding:24px 0;
  }
</style>
