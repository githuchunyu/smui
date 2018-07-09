<template>
  <div class="page">

    <sm-header title="LazyLoad"></sm-header>

    <h4>图片懒加载</h4>
    <div class="imgs">
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://uploads.5068.com/allimg/1712/151-1G20F92338.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://pic1.win4000.com/wallpaper/2017-12-06/5a27b9764e778.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://att.bbs.duowan.com/forum/201206/27/1549072n2kdodaoq8j9pit.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://pic1.win4000.com/wallpaper/a/59322f0f1ee8b.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://pic1.win4000.com/wallpaper/5/59bc9a6ce5ddb.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://pic1.win4000.com/wallpaper/8/596c684d66b9d.jpg"></sm-lazyload>
      <sm-lazyload class="img" style="padding-bottom:56.25%;" src="http://ww1.sinaimg.cn/large/d2e27164gw1fbtmq010afj21kw0w0108.jpg"></sm-lazyload>

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
    .imgs {
      padding:0 20px;
    }
    .img {
      width:100%;height:0;
      margin:20px 0;
    }
</style>
