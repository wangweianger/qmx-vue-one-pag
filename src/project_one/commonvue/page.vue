<style lang="sass" scoped>
    .copot-page{
      overflow: hidden;
      margin-bottom:20px;
    }
</style>

<template>
  <div class="copot-page">    
    <div class="copot-page-size"></div>    
  </div> 
</template> 

<script>
import config from 'common/js/config'
import page from 'page'

export default {
  /*routerName  路由名字 name
    totalCount  总条数
    callback    回调函数
  */
  props:{
    totalCount:{
      type:Number,
      required: true,
      default:0,
    },
    nowPage:{
      type:Number,
      required: true,
      default:0,
    }
  },
  watch:{
    totalCount (newVal) {
      this.gitPages();
    },
    nowPage (newVal) {
      this.gitPages();
    },
  },
  ready:function () {
    this.gitPages();
  },
  methods:{
    gitPages:function(){
      var This=this;
      page({
          route:This.$route,
          routerName:This.$route.name,
          parent:$("div.copot-page-size"),
          nowPage:This.nowPage,
          pageSize:config.pageSize,
          totalCount:This.totalCount,
      })
    }
  },
 
}
</script>