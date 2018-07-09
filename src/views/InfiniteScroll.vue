<template>
  <div class="page">

    <sm-header title="InfiniteScroll"></sm-header>

    <h4>触底自动加载</h4>
    <div class="infinite-scroll">
      <sm-infinite-scroll :all-loaded="allLoaded" @on-loading="onLoading" ref="infinitescroll" :trigger-distance="100">
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </sm-infinite-scroll>
    </div>


  </div>
</template>

<script>
export default {
  name: 'views-header',
  data:()=>{
    return {
      list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      count:21,
      total:50,
      allLoaded:false,
    }
  },
  methods:{
    onLoading(){
      setTimeout(()=>{
        let list = [];
        let count = this.count;
        for (let i=count;i<count+10;i++){
          list.push(i);
        }
        this.count+=10;
        if (this.total<=this.count) {
          this.allLoaded = true;
        }
        this.list = this.list.concat(list);
        this.$refs['infinitescroll'].showLoading = false;
      },3000)
    },
  }
}
</script>

<style lang="less" scoped>
    ul {
      li {
        padding:20px;text-align: center;border-bottom: 1px solid #EEE;
        font-size: 32px;
      }
    }
    .infinite-scroll {
      height:600px;overflow-y: scroll;
    }
</style>
