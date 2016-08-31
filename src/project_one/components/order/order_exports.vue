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
			<h1 class="bigsize yahei">导出对账单</h1>
			<nav-bar><li slot="nav_two">交易管理</li></nav-bar>
		</div>
		<div class="">
			<div class="pushce_box">

				<div class="pushce_module common_block">
					<form id="checfile" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>对账单导出</span>
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
							            <button type="button" class="btn submit btn btn-primary mt15">导出对账单</button>
									</div>
								</div>
							</div>
				        </div>
					</form>
				</div>

				<div class="pushce_module common_block">
					<form id="checfile1" class="form-group" >
						<div class="head head-default">
				            <i class="largeiconfont">&#xe625;</i><span>易极付账单导入</span>
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
										<button type="button" class="btn submit btn btn-primary mt15">确定提交</button>
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

			//上传订单文件到国检
            validform({
                check:$('#checfile'),
                settings:{event:"change"},
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });	

            //上传订单文件到国检
            validform({
                check:$('#checfile1'),
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });	

            //时间选择器控件
            $('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
            });
		}
	}
</script>