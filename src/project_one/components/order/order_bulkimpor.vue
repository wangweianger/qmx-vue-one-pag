<style lang="sass" scoped>
	.search_commsearch .search_left {
		width: 120px;
		span {
			vertical-align: middle
		}
	}
	.search_commsearch {
		textarea {
			width: 520px;
			height: 100px;
			resize: none;
			overflow: hidden;
			overflow-y: auto;
		}
	}
	.bulkimpor_position {
		position:relative;
		.bulkimpor_express {
			position:absolute;
			right:0;
			top: 0;
			height: 100%;
			overflow: hidden;
			overflow-y:auto;
		}
		.table-bordered th {
			border-bottom-width:1px;
		}
	}
</style>
<template>
<div class="container-fluid">
	<div class="row comm_conent_padding">
		<div class="comm_content_top mb20">
			<h1 class="bigsize yahei">批量导入订单</h1>
			<nav-bar><li slot="nav_two">交易管理</li></nav-bar>
		</div>
		<div class="pd15">
			<div class="common_block">
				<div class="head head-default">
		            <i class="largeiconfont">&#xe625;</i><span>批量重置订单状态</span>
		        </div>
		        <div class="contener pushce_pd">
					<div class="search_box">
						<div class="search_commsearch">
							<div class="search_left"><span class="red smallsize">*</span>是否更改订单号：</div>
							<div class="search_right">
								<select class="form-control tiniestsize inp_com_w">
									<option value="0">是</option>
									<option value="1">否</option>
								</select>
							</div> 
						</div>
						<div class="search_commsearch">
							<div class="search_left"><span class="red smallsize">*</span>订单号【一行一个】：</div>
							<div class="search_right">
								<textarea class="form-control" placeholder="160411135311000368
160411135828000370"></textarea>
							</div> 
						</div>
						<div class="search_commsearch">
							<div class="search_left"><span class="red smallsize">*</span>退回原因：</div>
							<div class="search_right">
								<p><textarea class="form-control" placeholder="退回原因"></textarea></p>
								<button type="button" class="btn submit btn btn-primary mt15">重置成待审核</button>
							</div> 
						</div>
					</div>
		        </div>
			</div>
			<div class="common_block mt15">
				<div class="head head-default">
		            <i class="largeiconfont">&#xe625;</i><span>批量回填运单号</span>
		        </div>
		        <div class="contener pushce_pd bulkimpor_position">
		        	<div class="search_box">
		        		<div class="search_commsearch">
		        			<div class="search_left"><span class="red smallsize">*</span>批量导入订单号：</div>
		        			<div class="search_right">
		        				<p><textarea class="form-control" placeholder="订单号，运单号，快递公司id"></textarea></p>
								<button type="button" class="btn submit btn btn-primary mt15">批量导入</button>
		        			</div>
		        		</div>
		        		<div class="search_commsearch">
							<div class="search_left"><span class="red smallsize">*</span>订单号【一行一个】：</div>
							<div class="search_right">
								<p><textarea class="form-control" placeholder="160411135311000368
160411135828000370"></textarea></p>
								<button type="button" class="btn submit btn btn-primary mt15">批量操作</button>
							</div> 
						</div>

						<div class="bulkimpor_express w-300">
			        		<tablecomponent :list.sync="listdata">
			        			<div slot="table_list" class="table_list">
			        				<table class="table table-hover table-bordered">
			        					<thead>
					        				<tr>
					        					<th v-for="item in columndata">{{item.name}}</th>
					        				</tr>
					        			</thead>
					        			<tr v-for="item in listdata">
					        				<td>{{item.expressname}}</td>
					        				<td>{{item.expressnum}}</td>
					        			</tr>
			        				</table>
			        			</div>
			        			
			        		</tablecomponent>
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
		data () {
			return {
				listdata: [],
				columndata: [
                    {
                        name: '快递公司'
                    },
                    {
                        name: '公司ID'
                    }
                ]
			}
		},
		ready:function(){
			var data = [
				{
					expressname:'顺丰',
					expressnum:'12313'
				},
				{
					expressname:'申通',
					expressnum:'12313'
				}
			];
			for (var i = 0; i < data.length; i++) {
                data[i]['isChecked'] = false;
            }
            this.listdata = data;
		}
	}
</script>