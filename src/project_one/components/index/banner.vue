<style lang='sass' scoped>
#banner{
  font-style: 25px;font-weight:bold;color:red;
}
</style>

<template>
  <div id="banner">
    <div>这里面是banner</div>
  </div>
</template>

<script>
export default {
  components:{
  },
  vuex: {
    getters: {
    },
    actions: {
    }
  },
  ready:function(){
    console.log($('#toolbar').css({background:'#ccc'}))
  },
}
</script>


