<style lang="sass" scoped>
   .order_jdlist {
        label {
            input {
                top: 7px;
            }
        }
   }

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
                <div class="content pd15 order_jdlist">
                    <div class="search_box">
                        <div class="search_commsearch">
                            <div class="search_left">订单查询：</div>
                            <div class="search_right">
                                <div class="input-group inp_com_w">
                                  <input type="text" class="form-control tiniestsize" placeholder="订单编码/外部订单/收件人姓名/手机号">
                                  <span class="input-group-btn"><button class="btn btn-primary" type="button">查询</button></span>
                                </div><!-- /input-group -->
                            </div>
                        </div>
                        <div class="search_commsearch">
                            <div class="search_left">选择类型：</div>
                            <div class="search_right">
                                <label class="radio-inline mr20">
                                  <input type="radio" value="option1">未加入加农炮
                                </label>
                                <label class="radio-inline mr20">
                                  <input type="radio" value="option1">已导入加农炮
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>

                <div class="checktable">
                    <tablecomponent :list.sync="listdata">
                        <div slot="table_list" class="table_list">
                            <table class="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th><input @click="checkAll" type="checkbox" value="option1" aria-label="..."></th>
                                    <th v-for="item in columndata">{{item.name}}</th>
                                </tr>
                                </thead>
                                <tr v-for="item in listdata" class="smasize">
                                    <td><input type="checkbox" v-model="item.isChecked" value="{{item.orderId}}"
                                               aria-label="..."></td>
                                    <td>{{item.orderId}}</td>
                                    <td>{{item.cannonId}}</td>
                                    <td>{{item.trackingNum}}</td>
                                    <td>{{item.orderMoney}}</td>
                                    <td>{{item.benefit}}</td>
                                    <td>{{item.commodity}}</td>
                                    <td>{{item.benefitdity}}</td>
                                </tr>
                            </table>
                        </div>
                    </tablecomponent>
                </div>

                <div class="page_box">
                    <page :now-page="2" :total-count="200"></page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from 'commonvue/navBar' 
    import searc from 'commonvue/search'
    import tablecomponent from 'commonvue/table'
    import page from 'commonvue/page'

    export default {
        components: {
            navBar,
            searc,
            tablecomponent,
            page
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
                    {
                        name: '订单编号'
                    },
                    {
                        name: '加农炮编号'
                    },
                    {
                        name: '运单号'
                    },
                    {
                        name: '订单金额'
                    },
                    {
                        name: '优惠金额'
                    },
                    {
                        name: '商品信息'
                    },
                    {
                        name: '优惠信息'
                    }
                ]
            }
        },
        ready: function () {
            var data = [
                {
                    orderId: '160812171218000824',
                    cannonId: '160812171218000824',
                    trackingNum: '1223655681',
                    orderMoney: "199.00",
                    benefit : '300.00',
                    commodity: '乐敦眼药水',
                    benefitdity: '满100减300'
                },
                {
                    orderId: '160812171218000824',
                    cannonId: '160812171218000824',
                    trackingNum: '1223655681',
                    orderMoney: "199.00",
                    benefit : '300.00',
                    commodity: '乐敦眼药水',
                    benefitdity: '满100减300'
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
        }
    }
</script>