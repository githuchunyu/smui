<template>
  <div class="page">

    <sm-header title="CheckList"></sm-header>

    <h4>多选</h4>
    <div>
        <sm-checklist v-model="o" :option="option"></sm-checklist>
        <div class="select">选择的是：{{o.join(',')}}</div>
    </div>

    <h4>禁止项目</h4>
    <div>
        <sm-checklist v-model="o2" :option="option2"></sm-checklist>
        <div class="select">选择的是：{{o2.join(',')}}</div>
    </div>

    <h4>最多2个</h4>
    <div>
        <sm-checklist v-model="o3" :option="option3" :max="2"></sm-checklist>
        <div class="select">选择的是：{{o3.join(',')}}</div>
    </div>

    <h4>右对齐</h4>
    <div>
        <sm-checklist v-model="o4" :option="option4" align="right"></sm-checklist>
        <div class="select">选择的是：{{o4.join(',')}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data: ()=>{
    return {
      o:['A'],
      option:[
        {label:'选项A',value:'A',disabled:false},
        {label:'选项B',value:'B',disabled:false},
        {label:'选项C',value:'C',disabled:false}
      ],
      o2:['A'],
      option2:[
        {label:'选项A',value:'A',disabled:false},
        {label:'选项B',value:'B',disabled:true},
        {label:'选项C',value:'C',disabled:false}
      ],
      o3:['A'],
      option3:[
        {label:'选项A',value:'A',disabled:false},
        {label:'选项B',value:'B',disabled:false},
        {label:'选项C',value:'C',disabled:false}
      ],
      o4:['A'],
      option4:[
        {label:'选项A',value:'A',disabled:false},
        {label:'选项B',value:'B',disabled:false},
        {label:'选项C',value:'C',disabled:false}
      ]
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
    .select {
      padding:12px 0;color:#999;
    }
</style>
