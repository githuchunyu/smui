<template>
  <div id="app">
    <div id="con">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  }

}
</script>

<style lang="less">
@import url(./index.less);
html,body {
  height:100%;

}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  display: flex;flex-direction: column;
  max-width: 750px;margin:0 auto;
}
#con {
  height:100%;
}
.page {
    text-align: left;
    padding-top:80px;
    h4 {
        color:#999;
        text-align: center;
        margin:20px 0 8px 0;
    }
}
</style>
