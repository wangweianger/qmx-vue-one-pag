<template>
  <div id="toolbar">
    <div>{{getIndexState.number}}</div>
    <button v-on:click="alertSomeThing(getIndexState.number)">弹出某些东西</button>
    <a v-link="{ path: '/user', exact: true }">go User</a><br>
    <a v-link="{ path: '/order', exact: true }">go order</a>
    <div>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
      <p>当前路由参数: {{$route.query.name}}</p>
    </div>
    <banner></banner>
  </div>
</template>

<script>
import { alertSomeThing } from './vuex/action'
import banner from './banner'

export default {
  components:{
    banner
  },
  vuex: {
    getters: {
      index: ({ index }) => index
      // index: state => state.index
    },
    actions: {
      alertSomeThing
    }
  },
  ready:function(){
    console.log($('#toolbar').css({background:'#ccc'}))
  },
}
</script>


