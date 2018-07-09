<template>
  <div class="page">

    <sm-header title="Range"></sm-header>

    <h4>基本功能</h4>
    <div>
        <sm-range v-model="value0">
          <div slot="label" class="label">
            <p>默认</p>
            <p>value:{{value0}}</p>
          </div>
        </sm-Range>
        <sm-range v-model="value1">
          <div slot="label" class="label">
            <p>预设</p>
            <p>value:{{value1}}</p>
          </div>
        </sm-Range>
        <sm-range v-model="value2">
          <div slot="label" class="label">
            <p>左右文字</p>
            <p>value:{{value2}}</p>
          </div>
          <div slot="start">0</div>
          <div slot="end">100</div>
        </sm-Range>
    </div>

    <h4>自定义</h4>
    <div>
        <sm-range v-model="value3" :step="10">
          <div slot="label" class="label">
            <p>定义步长</p>
            <p>value:{{value3}}</p>
          </div>
        </sm-Range>
        <sm-range v-model="value4" :min="10" :max="90">
          <div slot="label" class="label">
            <p>定义区间</p>
            <p>value:{{value4}}</p>
          </div>
        </sm-Range>
        <sm-range v-model="value5" :barHeight="4">
          <div slot="label" class="label">
            <p>定义线宽</p>
            <p>value:{{value5}}</p>
          </div>
        </sm-Range>
        <sm-range v-model="value6" disabled>
          <div slot="label" class="label">
            <p>无效</p>
            <p>value:{{value6}}</p>
          </div>
        </sm-Range>
    </div>


  </div>
</template>

<script>
export default {
  name: 'home',
  data:()=>{
    return {
      value0:0,
      value1:20,
      value2:0,
      value3:0,
      value4:10,
      value5:0,
      value6:30,
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
    .label {
      width:120px;
      display: flex;flex-direction: column;
      p {
        &:nth-child(1) {
          font-size: 28px;
        }
        &:nth-child(2) {
          font-size:20px;
          color:#999;
        }
      }
    }
</style>
