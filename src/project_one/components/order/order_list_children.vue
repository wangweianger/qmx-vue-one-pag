<style lang="sass" scoped>
   .table-bordered {
        td {
            span {
                background: #286090;
                padding:4px;
                color: #fff;
            }
        }
   }
   .content{
        .no_padding_l{
            padding-left:0;
        }
        .search_commsearch{
            margin:0;
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
                <div class="content pd15">
                    <div class="search_box">
                        <div class="search_commsearch no_padding_l">
                             <select class="form-control tiniestsize w-100 float-left concat_no_r_bor">
                                <option value="">订单编码</option>
                                <option value="">外部订单</option>
                                <option value="">商品名称</option>
                            </select>
                            <div class="input-group tiniestsize w-300 float-left mr15">
                                <input type="text" class="form-control concat_no_l_bor" placeholder="输入查询信息">
                                <span class="input-group-btn"><button class="btn btn-primary" type="button">查询</button></span>
                            </div><!-- /input-group -->

                            <select class="form-control tiniestsize w-200 inline_block">
                                <option value="">--请选择渠道--</option>
                                <option value="">京东渠道订单</option>
                                <option value="">内部下单</option>
                                <option value="">自营订单</option>
                            </select>
                            <select class="form-control tiniestsize w-200 inline_block">
                                <option value="">所有订单状态</option>
                                <option value="">未支付订单</option>
                                <option value=""> 已支付(待审核)</option>
                                <option value="">已审核订单</option>
                                <option value="">待海关审核订单</option>
                                <option value="">待发货订单</option>
                                <option value="">已发货订单</option>
                                <option value="">已关闭订单</option>
                            </select>
                            <button type="button" class="btn btn-primary">查询</button>
                    </div>
                    <hr>
                </div>
                <!-- table 列表 -->
                <div class="checktable">
                    <div class="con_menu_top mb15 button_list row">
                        <div class="col-sm-4">
                            <pagelist :page-size.sync="20"></pagelist>
                        </div>
                        <div class="col-sm-8 tr">
                            <page :now-page="2" :total-count="200"></page>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <tr>
                                <th v-for="item in columndata">{{item}}</th>
                                <th>操作</th>
                            </tr>
                            <tr v-for="item in listdata" class="smasize">
                                <td><a v-link="{ name: 'order_list_children'}" v-text="item.orderId"></a></td>
                                <td>{{item.status}}</td>
                                <td>{{item.logisticsInfo}}</td>
                                <td>{{item.pic}}</td>
                                <td>{{item.recipients}}</td>
                                <td>{{item.user}}</td>
                                <td>{{item.orderTime}}</td>
                                <td>{{item.amount}}</td>
                                <td>{{item.tickling}}</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
                <!-- 分页 -->
                <div class="page_box tr mr20 mb30">
                    <page :now-page="2" :total-count="200"></page>
                </div>
                <!--子订单详情-->
                <div class="order_children mr30">
                    <div class="common_block mb30">
                        <div class="head head-default">
                            <i class="largeiconfont"></i>
                            <span>子订单详情</span>
                        </div>
                        <div class="contener pd15">
                            <!--收货人-->
                            <div class="rder_childrenbox mb30">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <p class="mb20">
                                                <span class="mr20">收货人：李四</span>
                                                <span class="mr20">收货人电话：18655555555</span>
                                                <span class="mr20">收货地址：广东省深圳市南山区软件产业基地4C3楼</span>
                                                <span class="mr20">邮编：10086</span>
                                                <span class="mr20">买家留言：一起发，</span>
                                            </p>
                                            <p>
                                                <span>所属订单：15090408015</span>
                                                <button v-on:click="showPagePop" type="button" class="btn btn-primary btn-sm ml30">编辑</button>
                                            </p>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <hr>

                            <!--基本信息-->
                            <div class="order_childrenbox mb30">
                                <label class="clear middlesize yahei">基本信息：</label>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">订单号：</div>
                                                <div class="search_right">151231234500323</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">外部订单号：</div>
                                                <div class="search_right">151231234500323</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">外部备注：</div>
                                                <div class="search_right">151231234500323</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">订单号：</div>
                                                <div class="search_right">
                                                     <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <th v-for="item in numdata">{{item}}</th>
                                                        </tr>
                                                        <tr v-for="item in tabdata">
                                                            <td>{{item.spmc}}</td>
                                                            <td>{{item.spbh}}</td>
                                                            <td>{{item.spsl}}</td>
                                                            <td>{{item.spdj}}</td>
                                                            <td><span>{{item.spzj}}</span></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <hr>

                            <!--支付信息-->
                            <div class="order_childrenbox mb30">
                                <label class="clear middlesize yahei">支付信息：</label>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">付款方式：</div>
                                                <div class="search_right">2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            
                            <!--资费信息-->
                            <div class="order_childrenbox mb30">
                                <label class="clear middlesize yahei">资费信息：</label>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">商品金额：</div>
                                                <div class="search_right">2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">发货运费：</div>
                                                <div class="search_right">2.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">发货邮税：</div>
                                                <div class="search_right">2.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-10 col-md-offset-1">
                                            <div class="search_commsearch">
                                                <div class="search_left">支付总额：</div>
                                                <div class="search_right">2.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <!-- 修改地址弹出层 -->
                <pagepop :options.sync="pagepopOptions" :show.sync="showPagepop">
                    <!--使用slot插槽分发内容-->
                    <div slot="content">
                        <form class="form-horizontal mt20">
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label normal">收货人</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control w-300" id="inputEmail3" placeholder="收货人姓名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label normal">收货人电话</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control w-300" id="inputEmail3" placeholder="收货人电话">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label normal">收货地址</label>
                                <div class="col-sm-10">
                                    <select class="form-control w-100 tiniestsize float-left mr10">
                                        <option value="">选择省</option>
                                        <option value="">所有仓库</option>
                                    </select>
                                    <select class="form-control w-100 tiniestsize float-left mr10">
                                        <option value="">选择市</option>
                                        <option value="">所有仓库</option>
                                    </select>
                                    <select class="form-control w-100 tiniestsize float-left">
                                        <option value="">选择县</option>
                                        <option value="">所有仓库</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label normal">邮编</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control w-300" id="inputEmail3" placeholder="邮编">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label normal">买家留言</label>
                                <div class="col-sm-10">
                                    <textarea class="form-control" rows="3" placeholder="买家留言"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-primary">确认修改</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </pagepop>
                
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from 'commonvue/navBar' 
    import pagelist from 'commonvue/pageList'
    import searc from 'commonvue/search'
    import page from 'commonvue/page'
    import pagepop from 'commonvue/page_pop'

    export default {
        components: {
            navBar,
            searc,
            page,
            pagelist,
            pagepop
        },
        data () {
            return {
                showPagepop:false,
                pagepopOptions:{
                    title:"修改地址",
                    icon:false,
                    isCloseBut:true,
                    width:750,//弹窗宽度
                },
                listdata: [],
                columndata: ['子订单列表','所属订单','来源','所含商品','数量','单价','订单状态','物流方式','发货状态',
                '跟新时间','运单号','退单理由','退单操作',
                ],
                tabdata:[],
                numdata:['商品名称','商品编号','数量','单价','总价']
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
                    orderId: 'Z15090408015-1',
                    status: '15090408015',
                    logisticsInfo: '当前：2016-03-15',
                    pic: "sdfsdf",
                    recipients: '王大锤身份证：',
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
            var tab = [
                {
                    spmc:'商品名称',
                    spbh:'商品编号',
                    spsl:'100',
                    spdj:'￥100.00',
                    spzj:'￥100.00'
                }
            ]
            this.tabdata = tab;
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
            //修改地址
            showPagePop() {
                this.showPagepop=!this.showPagepop;
            },
        }
    }
</script>