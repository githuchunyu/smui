<template>
  <div class="page">

    <sm-header title="IndexList"></sm-header>

    <h4>电话簿</h4>
    <div class="infinite-scroll">
      <sm-index-list :list="list" :all-loaded="allLoaded" @on-loading="onLoading" ref="infinitescroll" :trigger-distance="100"></sm-index-list>
    </div>


  </div>
</template>

<script>
export default {
  name: 'views-header',
  data:()=>{
    return {
      list:['ABC','爱人','大哥','爸爸','妈妈','我','你','他','123'],
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
    .infinite-scroll {
      height:1000px;overflow-y: scroll;
    }
</style>
