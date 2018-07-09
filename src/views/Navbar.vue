<template>
  <div class="page">
    <sm-header title="Navbar"></sm-header>
    <sm-navbar :list="tabs" v-model="activeIndex"></sm-navbar>
    <div class="tabs">
      <div class="tab" v-if="i==activeIndex" v-for="(c,i) in tabcons" :key="c.con">{{c.con}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'toast',
  data:()=>{
    return {
      tabcons:[
        {con:'主页'},{con:'发现'},{con:'专题'},{con:'我的'}
      ],
      tabs:['主页','发现','专题','我的'],
      activeIndex:0,
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .page {
      height:100%;
    }
    .tabs {
      height:100%;
    }
    .tab {
      height:100%;
      display:flex;align-items: center;justify-content: center;
      font-size: 80px;color:#999;
    }
</style>
