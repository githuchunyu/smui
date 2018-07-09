<template>
    <div class="smui-icon">
      <i :class="faa+' fa-'+name+' '+(spin?'fa-spin':'')"></i>
    </div>
</template>

<script scoped>
export default {
    name:'sm-icon',
    data: function () {
        return {

        }
    },
    props:{
      type:{
        type:String,
        default:'solid',
      },
      name:{
        type:String,
        default:'users',
      },
      spin:{
        type:Boolean,
        default:false,
      }
    },
    watch:{

    },
    computed:{
      faa(){
        let a = {solid:'fas',regular:'far',light:'fal',brand:'fab'};
        return a[this.type];
      }
    },
    methods: {
      clickCell(){

      }
    },
    mounted(){
      // console.log(this.$route)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(./fontawesome-all.css);

</style>
