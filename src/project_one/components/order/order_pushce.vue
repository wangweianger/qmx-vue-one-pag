<style lang="sass" scoped>
	.pushce_box {
		padding:15px;
		.pushce_module {
			margin-bottom: 50px;
		}
		.red {
			color: #f00;
		}
	}
	.search_commsearch .search_left {
		vertical-align: top;
	}
</style>
<template>
<div class="container-fluid">
	<div class="row comm_conent_padding">
		<div class="comm_content_top mb20">
			<h1 class="bigsize yahei">推送国检以及订单导出</h1>
			<nav-bar><li slot="nav_two">交易管理</li></nav-bar>
		</div>
			<div class="pushce_box">

				<div class="pushce_module common_block">
					<form id="checfile" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>推送订单到国检</span>
				        </div>
				        <div class="contener pushce_pd">
							<div class="search_box">
								<div class="search_commsearch">
									<div class="search_left">下载模板：</div>
									<div class="search_right">
										<a href="javascript:;">Excel模板</a>
									</div>
								</div>
								<div class="search_commsearch">
									<div class="search_left">选择文件：</div>
									<div class="search_right">
										<p><input class="form-control" type="file" datatype="*" sucmsg="已选择文件"  errormsg="请选择文件"></p>
										<button type="button" class="btn submit btn btn-primary mt15">上传订单excel推送国检</button>
									</div>
								</div>	
							</div>
				        </div>
					</form>
				</div>

				<div class="pushce_module common_block">
					<form id="chechtext" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>按批次号导出订单</span>
				        </div>
						<div class="contener pushce_pd">
							<div class="search_box">
								<div class="search_commsearch">
									<div class="search_left"><span class="red">*</span> 批次号：</div>
									<div class="search_right">
										<p><input type="text" class="text form-control" name="username" placeholder="请输入用户名"  datatype="*4-15"  sucmsg="批次号正确"  errormsg="请输入正确的批次号" /> </p>
										<button type="button" class="btn submit btn btn-primary mt15">下载订单列表</button> 
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>

			</div>	
	</div>
</div>
</template>
<script>
	import navBar from 'commonvue/navBar' 
	import pagepop from 'commonvue/page_pop'
    import inputvue from 'commonvue/input'
    import tablecomponent from 'commonvue/table'
    import search from 'commonvue/search'
	export default {

		components:{
			navBar,
			pagepop,
			inputvue,
			tablecomponent,
			search,
		},
		ready:function(){

			//上传订单文件到国检
            validform({
                check:$('#checfile'),
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });	

            //检查批次号
            validform({
                check:$('#chechtext'),
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });	
		}
	}
</script>