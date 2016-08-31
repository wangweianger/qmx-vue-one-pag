
<template>
	<div class="header">
		<!-- <i class="glyphicon glyphicon-menu-hamburger"></i> -->
		<span class="visible-xs menuicon" @click="toggleleftbar($event)"><i></i><i></i><i></i></span>
		<h3 class=""><img class="img" src="../assets/common/images/logo.png" alt="logo">订单OMS管理系统<span class="user">欢迎您，{{user}}<a class="lineColor" href="javascript:;" @click="logout">[退出]</a></span></h3>
	</div>
</template>
<style scoped lang="sass">
	.header{
		padding:0 20px;
		h3{
			font-size: 16px;
			margin:0;
			height: 40px;
			line-height: 40px;
			font-family:"微软雅黑";
			color:#fff;
			.user{
				font-weight: normal;
				float: right;
				font-size: 12px;
				a{
					margin-left: 10px;
				}
			}
			img{
				width:22px;height:22px;margin-right:5px;
			}
		}
		.menuicon {
			cursor: pointer;
			border-right:1px solid #42454e;
			color: #fff;
			padding: 7px 8px;
			position: absolute;
			left: 8px;
			width:37px;
			height:100%;
			i {
				height:1px;
				display:block;
				background:#888888;
				margin-bottom:5px;
			}
			i:nth-child(1) {
				margin-top:7px;
			}
		}
		
	}
	@media (max-width: 768px) { 
		.header{
			padding:0 30px 0 54px;
		}
	}
</style>
<script>
	module.exports={
		data : function(){
			return {
				user : "管理员",
				clickstatus:1
			}
		},
		methods : {
			//登出
			logout : function(){
				popup.confirm({title:'确定退出？',yes:function(){
					alert('00')
				}});
			},
			toggleleftbar:function($event){
				console.log(this.clickstatus)
				var _this = this;
				if(_this.clickstatus == 1){
					_this.clickstatus = 2;
					$('#left').css('left',0);
				}else {
					_this.clickstatus = 1;
					$('#left').css('left',-220);
				}
			}
		}
	}
</script>