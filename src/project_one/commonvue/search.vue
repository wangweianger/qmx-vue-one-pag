<template>
      <div class="search_top">
          <label v-for="item in searchlist"><span v-text="item.name"></span><input class="form-control normal" placeholder="{{item.placeholder}}" v-model="item.value" type="text"/></label>      
          <slot name="searcbtn"></slot>
      </div>
</template>
<script>
    export default {
        //父组件传递过来的参数
        props: {
            searchlist: {
                type: Array
            }
        },
        //本组件数据
        data:function(){
            return {
            }
        },
        methods: {
           
        },
        //计算属性
        computed: {

        },
        //数据观察
        watch: {

        },
        created:function () {

        },
        ready :function () {

        }
    }
</script>
<style lang="sass">
  .search_top {
    display: block;
    overflow: hidden;
    label {
      display: inline-block;
      margin: 0 15px 0 0;
      min-width: 225px;
    }
    a {
      margin-right: 15px;
      vertical-align: top;
    }
  }
</style>

