
<template>
	<header id="header" class="topMenu fontCorlor">
		<top></top>
	</header>
	<div id="left" class="slideLeft">
		<side></side>
	</div>
	<div id="content">
		<router-view></router-view>
	</div>
	<totop></totop>
</template>

<style>
	html,body{
		height: 100%;
	}
	#header{
		height: 40px;
	    position: fixed;
	    min-width: 100%;
	    z-index: 100;
	    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
	    background: #0e90d2;
	}
	#left{
		position: fixed;
	    top: 40px;
	    left: 0;
	    bottom: 0;
	    padding: 0px 0 50px;
	    width: 220px;
	    min-width: 45px;
	    max-height: 100vh;
	    height: 100%;
	    z-index: 99;
	    background: #fff;
	    overflow-y: auto;
	    overflow-x: hidden;
	    padding-top:20px;
	    box-shadow: 0 0 5px #aaa;
	    /*border-right:solid 1px #ddd;*/
	}
	#content{
		padding: 50px 10px 10px 0;
	    margin-left: 220px;
	    height: 100%;
	    overflow-y: auto;
	}
	@media (max-width: 768px) { 
		#content{
			margin-left: 0;
			padding: 50px 0 10px;
		}
		#left{
			left: -220px;
		}
	}
</style>

<script>
  import top from 'commonvue/top.vue'
  import side from 'commonvue/side.vue'
  import totop from 'commonvue/totop.vue'
  import store from './vuex/store';
  export default {
  	components :{
  		top,
  		side,
  		totop
  	},
    store,
  }
</script>
