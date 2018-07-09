<template>
  <div class="smui-index-list">
    <div class="smui-index-list-content" ref="content">
      <ul>
        <li class="smui-index-list-group" v-for="(l,i) in dataList" :key="i" v-if="l.list.length>0" :ref="'floor'+l.index">
          <div class="smui-index-list-no">{{l.index}}</div>
          <ul>
            <li class="smui-index-list-item" v-for="(ll,ii) in l.list">{{ll.name}}</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="smui-index-list-index">
        <ul>
          <li v-for="(d,i) in dataList" :class="{'none':d.list.length==0}" @click="goto(d)">{{d.index}}</li>
        </ul>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import url(../var.less);
  .smui-index-list {
      height:100%;
      overflow: hidden;position: relative;
      &-content {
        background: #FFF;
        height:100%;
        overflow: auto;
      }
      &-group {

      }
      &-no {
        background: #fafafa;color:@color-primary;
        font-size: 20px;
        padding:20px;
      }
      &-item {
        padding:15px 20px;font-size: 24px;
      }
      &-index {
        position: absolute;right:0;top:0;bottom:0;
        color:#999;
        ul {
          height:100%;
          display: flex;flex-direction: column;align-items: center;
          li {
            &.none {
              color:#CCC;
            }
            flex:1;padding:0 8px;
          }
        }
      }

  }
</style>

<script>
  import convertToPinyin from '../pingyin.js';
  export default {
    name: 'sm-infinite-scroll',
    components: {

    },
    props: {
      list:{
        type:Array,
        default:[],
      },
    },

    data() {
      return {
        indexList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
      };
    },

    computed: {
      dataList(){
        let list = Object.assign([],this.list)
        list.map((v,i)=>{
          list[i] = {name:v,pingyin:convertToPinyin(v)};
        }).sort((a,b)=>{return a.pingyin-b.pingyin});
        let d = [];
        for (let i=0;i<this.indexList.length;i++) {
          d.push({index:this.indexList[i],list:[]});
        }
        list.map((v,i)=>{
          let isC = false;
          for (let j=0;j<this.indexList.length;j++) {
            if (v.pingyin.indexOf(this.indexList[j])>=0) {
              d[j].list.push(v);
              isC = true;
              break;
            }
          }
          if (!isC) {
            d[26].list.push(v);
          }
        });
        return d;
      }
    },

    watch: {

    },

    methods: {
      handleScroll(event) {
        // 滚动到什么地方，

      },

      init() {
        this.$refs['content'].addEventListener('scroll', this.handleScroll);
      },
      
      goto(d){
        if (d.list.length==0) {
          return;
        }
        this.$refs['content'].scrollTop = this.$refs['floor'+d.index][0].offsetTop;
      }
    },

    mounted() {
      this.init();
    },
    beforeDestroy(){
      this.$refs['content'].removeEventListener('scroll', this.handleScroll);
    }
  };
</script>
