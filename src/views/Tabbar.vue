<template>
  <div class="page">
    <sm-header title="Tabbar"></sm-header>
    <div class="tabs">
      <div class="tab" v-if="i==activeIndex" v-for="(c,i) in tabcons" :key="c.con">{{c.con}}</div>
    </div>
    <sm-tabbar :list="tabs" v-model="activeIndex"></sm-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data:()=>{
    return {
      tabcons:[
        {con:'主页'},{con:'发现'},{con:'专题'},{con:'我的'}
      ],
      tabs:[
        {title:'主页',type:'icon',value:'home'},
        {title:'发现',type:'icon',value:'search'},
        {title:'专题',type:'icon',value:'list'},
        {title:'我的',type:'icon',value:'user'}
      ],
      activeIndex:0,
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
    .page {
      height:100%;padding-bottom:80px;
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
