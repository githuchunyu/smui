<template>
  <div class="page">

    <sm-header title="Spinner"></sm-header>

    <h4>snake</h4>
    <div class="item"><sm-spinner type="snake"></sm-spinner></div>

    <h4>double-bounce</h4>
    <div class="item"><sm-spinner type="double-bounce"></sm-spinner></div>

    <h4>triple-bounce</h4>
    <div class="item"><sm-spinner type="triple-bounce"></sm-spinner></div>

    <h4>fading-circle</h4>
    <div class="item"><sm-spinner type="fading-circle"></sm-spinner></div>
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
      display: flex;justify-content: center;
      margin:24px;
    }
</style>
