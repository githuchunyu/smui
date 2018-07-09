<template>
  <div class="page">

    <sm-header title="Toolbox"></sm-header>

    <div class="menu">
      <div class="menu-row">
        <h4>左上角</h4>
        <h4>右上角</h4>
      </div>
      <div class="menu-row">
        <h4>左下角</h4>
        <h4>右下角</h4>
      </div>
    </div>
    <div class="toolbox1">
      <sm-toolbox>
        <sm-toolbox-item><div class="item">1</div></sm-toolbox-item>
        <sm-toolbox-item><div class="item">2</div></sm-toolbox-item>
      </sm-toolbox>
    </div>

    <div class="toolbox2">
      <sm-toolbox align="right">
        <sm-toolbox-item><div class="item">1</div></sm-toolbox-item>
        <sm-toolbox-item><div class="item">2</div></sm-toolbox-item>
      </sm-toolbox>
    </div>

    <div class="toolbox3">
      <sm-toolbox align="bottom">
        <sm-toolbox-item><div class="item">1</div></sm-toolbox-item>
        <sm-toolbox-item><div class="item">2</div></sm-toolbox-item>
      </sm-toolbox>
    </div>

    <div class="toolbox4">
      <sm-toolbox align="left">
        <sm-toolbox-item><div class="item">1</div></sm-toolbox-item>
        <sm-toolbox-item><div class="item">2</div></sm-toolbox-item>
      </sm-toolbox>
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

<style lang="less">
    .page {
        text-align: left;
        h4 {
            color:#999;
            text-align: center;
            margin:20px 0 8px 0;
        }
    }
    .menu {
      position: fixed;top:50%;left:50%;transform: translate3d(-50%,-50%,0);
      &-row {
        border-bottom:1px solid #EEE;
        display: flex;
        &:nth-child(2) {
          border: none;
        }
        h4 {
          border-left:1px solid #EEE;
          margin:0;padding:24px;
          &:nth-child(1) {
            border:none;
          }
        }
      }
    }
    .toolbox1 {
      position: fixed;top:144px;left:64px;
    }
    .toolbox2 {
      position: fixed;top:144px;right:64px;
    }
    .toolbox3 {
      position: fixed;bottom:64px;right:64px;
    }
    .toolbox4 {
      position: fixed;bottom:64px;left:64px;
    }
    .item {
      height:64px;width:64px;background: #666;color:#FFF;border-radius: 32px;
      display: flex;justify-content: center;align-items: center;
    }
</style>
