<style lang="sass" scoped>
   

</style>

<template>
    <div class="container-fluid">
        <div class="row comm_conent_padding">
            <div class="comm_content_top mb20">
                <h1 class="bigsize yahei">订单管理</h1>
                <nav-bar><li slot="nav_two">交易管理</li></nav-bar>
            </div>
            <div class="common_block">
                <div class="head head-default">
                    <i class="largeiconfont"></i>
                    <span>订单列表</span>
                </div>
                <div class="content pd15">
                    <div class="search_box">
                    	<div class="float-left mr20">
	                        <input type="text" class="form-control tiniestsize w-200 inline_block" placeholder="订单编码">
	                        <input type="text" class="form-control tiniestsize w-200 inline_block" placeholder="外部订单号">
	                        <button type="button" class="btn btn-primary">查询</button>
                        </div>
                        <div class="input-prepend input-group w-250 ml30 float-left">
			                <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
			                <input type="text" name="reservation" id="reservation" class="form-control" placeholder="开始时间与结束时间" datatype="*"  sucmsg="时间正确"  errormsg="请输入正确的起始时间" />
			            </div>
			            <button type="button" class="btn submit btn btn-primary ml5">导入订单</button> 
                    </div>
                    <hr>
                </div>

                <div class="checktable">
                    <tablecomponent :list.sync="listdata">
                        <div slot="order_btn_list" class="order_btn_list mb10">
                            <div class="float-left">
                               
                            </div>
                            <div class="float-right">
                                <pagelist :page-size.sync="50"></pagelist>
                            </div>
                        </div>
                        <div slot="table_list" class="table_list">
                            <table class="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th v-for="item in columndata">{{item}}</th>
                                </tr>
                                </thead>
                                <tr v-for="item in listdata" class="smasize">
                                    <td>{{item.orderId}}</td>
                                    <td>{{item.status}}</td>
                                    <td>{{item.logisticsInfo}}</td>
                                    <td>{{item.pic}}</td>
                                    <td>{{item.recipients}}</td>
                                    <td>{{item.user}}</td>
                                    <td>{{item.orderTime}}</td>
                                    <td>{{item.amount}}</td>
                                    <td>{{item.tickling}}</td>
                                    <td>
                                       <button class="btn btn-primary btn-xs">退款完成</button>
                                       <button class="btn btn-default btn-xs mt5">查看</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </tablecomponent>
                </div>

                <div class="page_box tr mr20">
                    <page :now-page="2" :total-count="200"></page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from 'commonvue/navBar' 
    import pagelist from 'commonvue/pageList'
    import searc from 'commonvue/search'
    import tablecomponent from 'commonvue/table'
    import page from 'commonvue/page'

    export default {
        components: {
            navBar,
            searc,
            tablecomponent,
            page,
            pagelist
        },
        data () {
            return {
                searchdata: [{
                    name: '',
                    value: '',
                    placeholder: "订单编号或收件人或手机号或用户ID"
                }],
                listdata: [],
                columndata: [
                	'订单编号','外部订单号','收货地址',	'发货状态',	'退款金额',	'订单金额',	'收货人号码','收货人','支付渠道','订单渠道','订单备注',	'审批时间','操作'
                ]
            }
        },
        ready: function () {
            //时间选择
            $('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
                    function (start, end, label) {
                        console.log(start.toISOString() + '==' + end.toISOString());
                    });
            var data = [
                {
                    orderId: '160812171218000824',
                    status: '已发货',
                    logisticsInfo: '当前：2016-03-15  07:45:26 【中国香港】到达处理中心',
                    pic: "",
                    recipients: '王大锤身份证：51162219950304549X手机：13588888888',
                    user: '啾啾君用户id：263362239',
                    orderTime: '2016-03-13 12:45:26',//
                    amount: '¥3659.00',//
                    tickling: '已处理'
                },
                {
                    orderId: '160812171218000824',
                    status: '已发货',
                    logisticsInfo: '当前：2016-03-15  07:45:26 【中国香港】到达处理中心',
                    pic: "",
                    recipients: '王大锤身份证：51162219950304549X手机：13588888888',
                    user: '啾啾君用户id：263362239',
                    orderTime: '2016-03-13 12:45:26',//
                    amount: '¥3659.00',//
                    tickling: '已处理'
                }
            ];
            for (var i = 0; i < data.length; i++) {
                data[i]['isChecked'] = false;
            }
            this.listdata = data;
            //console.log(this.$route)
        },
        methods: {
            //单选
            checkedOne: function (item) {
                if (item.isChecked) {
                    item.isChecked = false;
                } else {
                    item.isChecked = true;
                }
                console.log(JSON.stringify(item))
            },
            //全选
            checkAll: function ($event) {
                var This = this;
                var _ischecked = $($event.target).prop('checked')
                if (_ischecked) {
                    for (var i = 0, len = This.listdata.length; i < len; i++) {
                        This.listdata[i].isChecked = true;
                    }
                } else {
                    for (var i = 0, len = This.listdata.length; i < len; i++) {
                        This.listdata[i].isChecked = false;
                    }
                }
                console.log(JSON.stringify(This.listdata[0]))

            },
            searchbtn(){
                alert(2)
            }
        }
    }
</script>