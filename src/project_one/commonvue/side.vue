<style scoped lang="sass">
	.left-nav{
		border-top: 1px solid #d8d4d4;
		.nav-item{
			position:relative;
		}
		.nav-title{
			line-height: 45px;
			padding: 0 10px;
			color: #5c5c5c;
			border-bottom: 1px solid #d8d4d4;
			cursor: pointer;
			font-size:14px;
			font-family: "微软雅黑";
			span{
				margin-right:6px;
			}
		}
		.nav-box, .nav-box-two{
			display: none;
			margin: 0;
			padding: 0;
			list-style: none;
			.nav-list{
				text-align: left;
				font-size:12px;
				line-height: 40px;
				a, p{
					padding: 0 20px;
					overflow: hidden;
					color: #666;
					display: block;
					text-decoration: none;
					display: block;
					span{
						float: right;
						color: #666;
					}
					&:hover{
				    background: #d2d3d6;
					}
					&:last-child{
						border-bottom:1px solid #d8d4d4;
					}
				}
				
			}
			.cur{
				background:#d2d3d6;
				a{
					color:#3f444c;
					font-weight:bold;
				}
			}
		}
		.open{
			.nav-box {
				display: block;
			}
			.nav-title {
				box-shadow: 0px 0px 5px #999;
				background:#595f69;
				color:#fff;
			}
		}
		.openslide {
			.nav-title {
				background:#595f69;
				color:#fff;
			}
		}
		.nav-list-two {
			span {
				transition: all .5s;
			}
		}
		.showul {
			span {
				transform:rotateZ(90deg);
			}
		}
		.nav-box-two {
			display: none;
			a {
				padding:0 20px 0 40px  !important;
				border-bottom:none !important;
				border-top:1px solid #d5d6d8;
			}
		}
		.left-button-slide{
			text-align: right;
			padding:10px;
			span{
				padding:3px 5px;
				border:solid 1px #aaa;
				background:#ccc;
				border-radius:3px;
				cursor:pointer;
			}
		}
		.slideUl{
			display:block;
			position: absolute;
		    width: 220px;
		    background: #e6e7e8;
		    top:0;
		    left: 45px;
		    z-index: 100;
		}
		.slideUl li:nth-child(1){
			margin-left:-1px;
		}
	}
	@media (max-width: 768px) { 
		.left-button-slide{
			display:none;
		}
	}
</style>

<template>
	<div class="left-nav " id="left-nav">
		<div class="left-button-slide"><span v-on:click="leftBarToggleFn($event)" class="largeiconfont">&#xe650;</span></div>
		<div class="nav-item" :class="{'open' : isProduct}">
			<div class="nav-title">
				<span class="largeiconfont" aria-hidden="true">&#xe62e;</span>
				<span class="title" v-show="!leftBarToggle">商品管理</span>
			</div>
			<ul class="nav-box">
				<li class="nav-list" :class="{'cur' : $route.name == 'product_list'}">
					<a href="#!/product/product_list">
						商品列表
					</a>	
				</li>
				<li class="nav-list" :class="{'cur' : $route.name == 'add_product'}">
					<a href="#!/product/add_product">
						添加商品
					</a>
				</li>
				<li class="nav-list" :class="{'cur' : $route.name == 'product_stock_info'}">
					<a href="#!/product/product_stock_info">
						商品库信息
					</a>
				</li>
				<li class="nav-list" :class="{'open2' : $route.name == ('product_list')}">
					<p class="nav-list-two">三级导航 <span class="iconfont smallsize " aria-hidden="true">&#xe61e;</span> </p>
					<ul class="nav-box-two" >
						<li class="nav-list" :class="{'cur' : $route.name == ('product_list')}"><a href="#!/product/list" >阿斯蒂芬阿斯蒂芬</a></li>
					</ul>
				</li>
			</ul>
		</div>

		<div class="nav-item" :class="{'open' : $route.name == 'order_list'}">
			<div class="nav-title" v-link="{name:'order_list'}">
				<span class="largeiconfont" aria-hidden="true">&#xe643;</span>
				<span class="title" v-show="!leftBarToggle">主订单列表</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_list_children'}">
			<div class="nav-title" v-link="{name:'order_list_children'}">
				<span class="largeiconfont" aria-hidden="true">&#xe644;</span>
				<span class="title" v-show="!leftBarToggle">子订单列表</span>
			</div>
			<ul class="nav-box">
				<li class="nav-list" :class="{'cur' : $route.name == 'product_list'}">
					<a href="#!/product/product_list">
						商品列表
					</a>	
				</li>
				<li class="nav-list" :class="{'cur' : $route.name == 'add_product'}">
					<a href="#!/product/add_product">
						添加商品
					</a>
				</li>
				<li class="nav-list" :class="{'cur' : $route.name == 'product_stock_info'}">
					<a href="#!/product/product_stock_info">
						商品库信息
					</a>
				</li>
				<li class="nav-list" :class="{'open2' : $route.name == ('product_list')}">
					<p class="nav-list-two">三级导航 <span class="iconfont smallsize " aria-hidden="true">&#xe61e;</span> </p>
					<ul class="nav-box-two" >
						<li class="nav-list" :class="{'cur' : $route.name == ('product_list')}"><a href="#!/product/list" >阿斯蒂芬阿斯蒂芬</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_bulkimpor'}">
			<div class="nav-title" v-link="{name:'order_bulkimpor'}">
				<span class="largeiconfont" aria-hidden="true">&#xe646;</span>
				<span class="title" v-show="!leftBarToggle">批量更改订单</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_refund'}">
			<div class="nav-title" v-link="{name:'order_refund'}">
				<span class="largeiconfont" aria-hidden="true">&#xe648;</span>
				<span class="title" v-show="!leftBarToggle">退款申请列表</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_import_erp'}">
			<div class="nav-title" v-link="{name:'order_import_erp'}">
				<span class="largeiconfont" aria-hidden="true">&#xe641;</span>
				<span class="title" v-show="!leftBarToggle">结算单导入ERP</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_exports'}">
			<div class="nav-title" v-link="{name:'order_exports'}">
				<span class="largeiconfont" aria-hidden="true">&#xe63f;</span>
				<span class="title" v-show="!leftBarToggle">导出对账单</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_erp_push_record'}">
			<div class="nav-title" v-link="{name:'order_erp_push_record'}">
				<span class="largeiconfont" aria-hidden="true">&#xe63c;</span>
				<span class="title" v-show="!leftBarToggle">ERP推送记录</span>
			</div>
		</div>
		<div class="nav-item" :class="{'open' : $route.name == 'order_customs_duties'}">
			<div class="nav-title" v-link="{name:'order_customs_duties'}">
				<span class="largeiconfont" aria-hidden="true">&#xe63e;</span>
				<span class="title" v-show="!leftBarToggle">海关关税标记</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports={
		data(){
			return{
				leftBarToggle:false,
			}
		},
		ready : function(){
			var This=this;
			$(".left-nav").on("click", ".nav-title", function(){
				if(!This.leftBarToggle){
				//展开导航
					$(this).parent('.nav-item').addClass('openslide').siblings().removeClass('openslide open');
					$(this).parent('.nav-item').find('.nav-box').slideToggle().end().siblings().find('.nav-box').slideUp();
					$(this).parent('.nav-item').find('.nav-box-two').slideUp().end().find('.showul').removeClass('showul');
				}
			});
			$(".left-nav").on("click", ".nav-list-two", function(){
				//展开导航
				$(this).toggleClass('showul').next().stop().slideToggle();
				$(this).parent().siblings().find('ul').slideUp();
			});

			//移入时效果
			$(".nav-item").on("mouseenter",function(){
				if(This.leftBarToggle){
					$('#left').css({overflow:'visible'})
					$('#left-nav').find('.nav-item').removeClass('open')
					$(this).addClass('open')
					$('#left-nav').find('ul').hide();
					$(this).find('ul.nav-box').addClass('slideUl').show();
				}
			})
			// //移出时效果
			$(".nav-item").on("mouseleave", function(){
				var _this=this;
				if(This.leftBarToggle){
					setTimeout(function(){
						$(_this).find('ul.nav-box').hide();
					}, 10);
				}
			})
			
		},
		attached:function(){
			$('#left li a').click(function(){
				if($(window).width()<768) {
					if($(this).find('a')) {
						$('#left').css('left',-220);
					}
				}
			});
			$(window).on('resize',function(){
				if($(window).width()>768) {
					$('#left').css('left',0);
				}else {
					$('#left').css('left',-220);
				}
			});
		},
		methods:{
			leftBarToggleFn($event){
				if(this.leftBarToggle){
					$('#left-nav').find('ul.nav-box').removeClass('slideUl');
					$('#left').css({'width':'220px'})
					$('#content').css({'marginLeft':'220px'})
					this.leftBarToggle=false;
				}else{
					$('#left-nav').find('ul.nav-box').addClass('slideUl');
					$('#left').css({'width':'45px'})
					$('#content').css({'marginLeft':'45px'})
					this.leftBarToggle=true;
				}

			},
		}
	}
</script>