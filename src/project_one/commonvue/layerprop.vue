<template>
  <div class="prop-Alert" v-if="show">
	<div class="marker"  @click="markclick"></div>
	  <div class="prop-contai">
		<div class="porp-title">
			<span v-text="option.title" :class="option.msg"></span>
			<a v-if="option.isshowbtn" href="javascript:;" @click="closeprop" ></a>
		</div>
		<div class="prop-conbox">
			<p v-text="option.content"></p>
		</div>
	  </div>
	</div>
  </div> 
</template> 

<script>

export default {
  props:{
  	option:{
  		type:Object,
		default:function(){
			return {	
				title:'信息',
				content:'内容提醒',
				msg:'icon-1',
				isshowbtn:true,
				mark:true,
				
			}
		}
	},
	show:{
		type:Boolean,
	}
  },
  data () {
  	return{

  	}
  },
  ready:function(){
  },
  methods:{
  		markclick(){
  			if(this.option.mark){
  				this.closeprop();
  			}
  		},
  		closeprop(){
  			this.show= !this.show;
  		},
  }

}
</script>
<style lang="sass" scoped>
.prop-Alert {
	position:fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	z-index:999;
	.marker {
		background:rgba(0,0,0,.6);
		display:block;
		width:100%;
		height:100%;
	}
	.prop-contai {
		display:block;
		min-width:350px;
		min-height:100px;
		position:absolute;
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		background:#fff;
		.porp-title {
			height:30px;
			margin-top:10px;
			position:relative;
			a {
				position:absolute;
				right:20px;
				top:50%;
				height:20px;
				margin-top:-10px;
				width:30px;
				background:#f00;
			}
			span {
				display:block;
				padding:0 0 0 46px;
				line-height:30px;
				font-size:16px;
			}
		}
	}

}	
</style>