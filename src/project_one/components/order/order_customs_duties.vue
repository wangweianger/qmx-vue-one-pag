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
			<h1 class="bigsize yahei">海关关税标记</h1>
			<nav-bar><li slot="nav_two">交易管理</li></nav-bar>
		</div>
		<div class="">
			<div class="pushce_box">

				<div class="pushce_module common_block">
					<form id="chechtext" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>税单导入</span>
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
										<button type="button" class="btn submit btn btn-primary mt15">提交文件</button>
									</div>
								</div>	
							</div>
				        </div>
					</form>
				</div>

				<div class="pushce_module common_block">
					<form id="checfile" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>税单导出</span>
				        </div>
				        <div class="contener pushce_pd">
							<div class="search_box">
								<div class="search_commsearch">
									<div class="search_left">导出日期：</div>
									<div class="search_right">
										 <div class="input-prepend input-group" style="min-width:400px;">
							                <div class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></div>
							                <input type="text" datatype="*" style="width: 200px" name="reservation" id="reservation" class="form-control float-left" placeholder="请选择导出数据时间区间" sucmsg="选择时间成功"  errormsg="请选择导出数据的时间"/>
							            </div>
							            <p class="tiniestsize red">导表数据仅支持<3个月</p>
							            <button type="button" class="btn submit btn btn-primary mt15">导出税单</button>
									</div>
								</div>
							</div>
				        </div>
					</form>
				</div>

			</div>	
			
			
		</div>
	</div>
</div>
</template>
<script>
	import navBar from 'commonvue/navBar' 
	export default {
		components:{
			navBar
		},
		ready:function(){
			//时间选择器控件
            $('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
            });
            
			//上传订单文件到国检
            validform({
                check:$('#checfile'),
                settings:{event:"change"},
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