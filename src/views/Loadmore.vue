<template>
  <div class="page">

    <sm-header title="Loadmore"></sm-header>

    <h4>基本</h4>
    <div class="loadmore">
      <sm-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </sm-loadmore>
    </div>


  </div>
</template>

<script>
export default {
  name: 'views-header',
  data:()=>{
    return {
      list:[1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods:{
    loadTop(){
      setTimeout(()=>{
        let list = [];
        for (let i=0;i<10;i++){
          list.push(i);
        }
        this.list = this.list.concat(list);
        this.$refs.loadmore.onTopLoaded();
      },3000)
    },
    loadBottom(){
      setTimeout(()=>{
        let list = [];
        for (let i=0;i<10;i++){
          list.push(i);
        }
        this.list = this.list.concat(list);
        this.$refs.loadmore.onBottomLoaded();
      },3000)
    },
  }
}
</script>

<style lang="less" scoped>
    ul {
      li {
        padding:20px;text-align: center;border-bottom: 1px solid #EEE;
        font-size:32px;
      }
    }
    .loadmore {
      height:600px;overflow-y: scroll;
    }
</style>
