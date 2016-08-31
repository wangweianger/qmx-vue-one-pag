<template>
      <span>
          每页显示
          <select v-on:change="callbackfn" class="form-control w-100 inline_block" v-model="pageSize">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
          </select>
          页
      </span>
</template>
<script>
    export default {
        //父组件传递过来的参数
        props: {
            pageSize: {
              type: Number,
              twoWay: true
            },
            callback:{
              type:Function
            }
        },
        methods: {
           callbackfn(){
              if(this.callback){
                this.callback();
              }
           }
        },
    }
</script>
<style lang="sass">
  
</style>

