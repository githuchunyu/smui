<template>
  <div class="page">

    <sm-header title="Swiper"></sm-header>

    <h4>基础用法</h4>
    <div class="swipe">
      <sm-swipe>
        <sm-swipe-item><div class="item">1</div></sm-swipe-item>
        <sm-swipe-item><div class="item">2</div></sm-swipe-item>
      </sm-swipe>
    </div>

    <h4>隐藏指示器</h4>
    <div class="swipe">
      <sm-swipe :show-indicators="false">
        <sm-swipe-item><div class="item">1</div></sm-swipe-item>
        <sm-swipe-item><div class="item">2</div></sm-swipe-item>
      </sm-swipe>
    </div>

    <h4>取消自动</h4>
    <div class="swipe">
      <sm-swipe :auto="0">
        <sm-swipe-item><div class="item">1</div></sm-swipe-item>
        <sm-swipe-item><div class="item">2</div></sm-swipe-item>
      </sm-swipe>
    </div>

    <h4>默认索引</h4>
    <div class="swipe">
      <sm-swipe :defaultIndex="1" :auto="0">
        <sm-swipe-item><div class="item">1</div></sm-swipe-item>
        <sm-swipe-item><div class="item">2</div></sm-swipe-item>
      </sm-swipe>
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
    .swipe {
      height:400px;
      margin-bottom:48px;
    }
    .item {
      height:400px;
      display: flex;align-items: center;justify-content: center;
      font-size: 36px;background: #CCC;
    }
</style>
