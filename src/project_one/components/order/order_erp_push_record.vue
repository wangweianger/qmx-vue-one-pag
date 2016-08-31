<style lang="sass" scoped>
   .inp_com_w_time{width:280px!important;}

</style>

<template>
    <div class="container-fluid">
        <div class="row comm_conent_padding">
            <div class="comm_content_top mb20">
                <h1 class="bigsize yahei">ERP推送记录</h1>
                <nav-bar><li slot="nav_two">交易管理</li></nav-bar>
            </div>
            <div class="common_block">
                <div class="head head-default">
                    <i class="largeiconfont"></i>
                    <span>订单列表</span>
                </div>
                <div class="content pd15">
                    <div class="search_box">
                        <div class="search_commsearch">
                            <input type="text" class="form-control tiniestsize w-250 float-left mr10" placeholder="订单编码/外部订单/收件人姓名/手机号">
                            <select class="form-control tiniestsize w-200 float-left mr10">
                                <option value="0">--请选择推送类型--</option>
                                <option value="1">已支付订单推送</option>
                                <option value="2">已发货订单推送</option>
                                <option value="3">出库单推送</option>
                                <option value="4">退货单推送</option>
                                <option value="5">收款单推送</option>
                                <option value="6">退款单推送</option>
                                <option value="7">关闭订单推送</option>
                                <option value="8">调拨单推送</option>
                                <option value="9">发票单推送</option>
                            </select>
                            <select class="form-control tiniestsize w-200 float-left mr10">
                                <option value="">--请选择推送状态--</option>
                                <option value="0">失败</option>
                                <option value="1">成功</option>
                            </select>
                            <div class="input-prepend input-group w-250 float-left mr10">
                                <div class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></div>
                                <input type="text" datatype="*" id="reservation" name="reservation" class="form-control float-left  w-150" placeholder="请选择时间区间" sucmsg="选择时间成功"  errormsg="请选择推送时间"/>
                            </div>
                            <button type="button" class="btn btn-primary">查询</button>
                        </div>
                    </div>
                    <hr>
                </div>

                <div class="checktable">
                    <tablecomponent :list.sync="listdata">
                        <div slot="order_btn_list" class="order_btn_list mb10">
                            <div class="float-left">
                                <button type="button" class="btn btn-primary">导出记录</button>
                            </div>
                            <div class="float-right">
                                <pagelist :page-size.sync="50"></pagelist>
                            </div>
                        </div>
                        <div slot="table_list" class="table_list clear">
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
                columndata: ['订单编号','推送类型','推送状态','推送时间','备注']
            }
        },
        ready: function () {
           //时间选择器控件
            $('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
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