<style lang="sass" scoped>
	.pushpdd_search {
		.radio-inline {
			input {
				top: 7px;
			}
		}
		.smallsize {
			vertical-align: middle;
		}
	}
</style>
<template>
<div class="container-fluid">
	<div class="row comm_conent_padding">
		<div class="comm_content_top mb20">
			<h1 class="bigsize yahei">拼多多订单导入</h1>
			<nav-bar><li slot="nav_two">交易管理</li></nav-bar>
		</div>
		<div class="common_block">
			<div class="head head-default"><i class="largeiconfont"></i><span>订单列表</span></div>
			<div class="content pd15">
				<div class="search_box pushpdd_search">
					<div class="search_commsearch">
						<div class="search_left">导入类型：</div>
						<div class="search_right">
							<label class="radio-inline mr20">
							  <input type="radio" value="option1">按时间段
							</label>
							<label class="radio-inline mr20">
							  <input type="radio" value="option1">按订单号
							</label>
						</div>
					</div>
					<div class="search_commsearch">
						<div class="search_left"><span class="red smallsize mr10">*</span>起始时间：</div>
						<div class="search_right">
							<form id="chectime"  class="form-group" >
								<div class="input-prepend input-group">
					                <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
					                <input type="text" style="width: 400px" name="reservation" id="reservation" class="form-control" placeholder="开始时间与结束时间" datatype="*"  sucmsg="时间正确"  errormsg="请输入正确的起始时间" />
					            </div>
					            <button type="button" class="btn submit btn btn-primary mt15">导入订单</button> 
					        </form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>	
</template>

<script>
	import navBar from 'commonvue/navBar' 
	import pagepop from 'commonvue/page_pop'
    import inputvue from 'commonvue/input'
	export default {

		components:{
			navBar,
			pagepop,
			inputvue,
		},
		ready:function(){

			//时间选择
			$('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
            });

            //时间验证
            validform({
                check:$('#chectime'),
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });	
			
		}
	}
</script>