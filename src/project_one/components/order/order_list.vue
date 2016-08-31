<style lang="sass" scoped>
    .common_block{
        margin-bottom:50px;
    }
    .con_menu_top{
        .tabled{
            width:100%;
            margin:0!important;
            padding:0!important;
        }
       .parent_tab th{
            text-align:center;
        }
        .parent_back{
            background: #ddd;
        }
        .block{
            overflow:hidden;
            border:solid 1px #ccc;
            border-top:none;
            border-radius:3px;
            background: #fff;
            box-shadow:0 0 8px 1px #cacaca;
        }
        .block:hover{
            background: #f4f4f4;
        }
        .tabled_no_l{
            border-left:none!important;
        }
        .tabled_no_r{
            border-right:none!important;
        }
        .border_l_r{
            border-left:solid 2px #ccc;
            border-right:solid 2px #ccc;
        }
        .children_tab_top{
            background:#eee;
        }
        .children_last_top th{
            height: 25px!important;
            line-height:25px;
            padding:0;
            margin:0;
            background:#ddd;
            font-weight:100;
        }
        .children_li_list{
            background:#eaeaea;
        }
        .chidlren_first_back{
            background: #ddd;
        }
        .maincolor{
            margin-left:3px;
            padding:3px;
        }
        .button_list{
            width:100%;
            overflow:hidden;
        }
        .scroll_content{
            min-width:1000px;
        }
    }
    .con_main_content{
        width:100%;
        overflow-x:auto;
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
                        <!-- Split button -->
                        <div class="float-left mr5"><selectmany title='主订单渠道' :list="selectmany" :choselist.sync="choselist"></selectmany></div>
                        <select class="form-control tiniestsize w-150 float-left mr5">
                            <option value="子订单状态">--主订单状态--</option>
                            <option value="已支付">已支付</option>
                            <option value="已审核">已审核</option>
                        </select> 
                        <input type="text" class="form-control w-150 float-left mr5" placeholder="外部订单号"> 
                        <input type="text" class="form-control w-150 float-left mr5" placeholder="订单编号">   
                        <input type="text" class="form-control w-150 float-left mr5" placeholder="收件人姓名">
                        <input type="text" class="form-control w-150 float-left mr5" placeholder="手机号">
                        <div class="w-200 float-left mr5">
                            <select-star-end-time :startime.sync="startime" :endtime.sync="endtime" placeholder="选择查询订单时间区间" singledatepicker="false" effective-time="5"></select-star-end-time>
                        </div>     
                        <button class="btn btn-primary" type="button">查询</button>
                    </div>
                    <hr>
                </div>

                <div class="checktable clear">
                    <div class="con_menu_top mb15 button_list row">
                        <div class="col-sm-4">
                            <pagelist :page-size.sync="20" :callback="alertSomeThing"></pagelist>
                        </div>
                        <div class="col-sm-8 tr">
                            <page :now-page="2" :total-count="200"></page>
                        </div>
                    </div>
                    <div class="con_menu_top con_main_content">
                        <div class="scroll_content">
                            <table class="table tabled parent_tab parent_back">
                                <tr class="border_l_r">
                                    <th class="w-80 tc">
                                        <input type="checkbox">
                                        <span @click="slideAll" class="iconfont cursor maincolor" v-text="ischeckall?'&#xe64b;':'&#xe64c;'"></span>
                                    </th>
                                    <th class="b-8">主订单编号</th>
                                    <th class="b-8">外部订单号</th>
                                    <th class="b-8">促销金</th>
                                    <th class="b-8">收件人</th>
                                    <th class="b-8">订单状态</th>
                                    <th class="b-8">订单金额</th>
                                    <th class="b-8">支付渠道</th>
                                    <th class="b-8">订单渠道</th>
                                    <th class="b-8">订单备注</th>
                                    <th class="b-8">下单时间</th>
                                    <th >操作</th>
                                </tr>
                            </table>
                            <!-- item 循环开始 -->
                            <div class="block mt15 mb15" v-for="item in [1,2,3,4]">
                                <table class="table table-bordered tabled tabled_no_l tabled_no_r">
                                    <tr class="children_li_list">
                                        <td class="w-80 tabled_no_l tc">
                                            <input type="checkbox">
                                            <span class="iconfont cursor maincolor" v-text="ischeckall?'&#xe64b;':'&#xe64c;'"></span>
                                        </td>
                                        <td class="b-8">11011dfgfd</td>
                                        <td class="b-8">11011derer</td>
                                        <td class="b-8">11011erer</td>
                                        <td class="b-8">11011dfgdf</td>
                                        <td class="b-8">11011dfgfd</td>
                                        <td class="b-8">11011derer</td>
                                        <td class="b-8">11011erer</td>
                                        <td class="b-8">11011dfgdf</td>
                                        <td class="b-8">11011dfgfd</td>
                                        <td class="b-8">11011derer</td>
                                        <td class="tabled_no_r tc">
                                            <button type="button" class="btn btn-primary btn-xs">冻结</button>
                                            <button type="button" class="btn btn-primary btn-xs">转仓</button>
                                            <button type="button" class="btn btn-primary btn-xs">审核</button>
                                            <button type="button" class="btn btn-primary btn-xs">拆单</button>
                                        </td>
                                    </tr>
                                </table>
                                <div v-if="ischeckall">
                                    <div class="text_con mt15 ml15 mr15 smasize">
                                        收货人：<span class="mr20">李四</span>     
                                        收货人电话：<span class="mr20">18664588642</span>
                                        收货地址：<span class="mr20">广东省广州市南山区深圳湾创业广场软件基地大厦4C三层启明星商务科技有限公司</span>
                                        邮编：<span class="mr20">100086</span>
                                        买家留言：<span class="mr20">一起发，请尽快发送</span>
                                        <button type="button" class="btn btn-primary btn-xs" v-on:click="showPagePop">编辑</button>
                                    </div>
                                    <div class="pd15">
                                        <table class="table table-bordered tabled parent_tab children_tab_top">
                                            <tr class="smasize chidlren_first_back">
                                                <th class="b-10">子订编号</th>
                                                <th class="b-10">包裹仓库</th>
                                                <th class="b-10">所属订单</th>
                                                <th class="b-10">订单状态</th>
                                                <th class="b-10">订单标记</th>
                                                <th class="b-10">订单状态</th>
                                                <th class="b-10">子订单单价</th>
                                                <th class="b-10">税费</th>
                                                <th class="b-10">运费</th>
                                                <th class="b-10">运单号</th>
                                            </tr>
                                        </table>
                                        <div>
                                            <table class="table table-bordered tabled tabled_no_l tabled_no_r">
                                                <tr>
                                                    <td class="b-10">
                                                        <span class="iconfont cursor maincolor">&#xe64c;</span>
                                                        <span class="iconfont cursor maincolor hide">&#xe64b;</span>
                                                        <span>11011dfgdf</span>
                                                    </td>
                                                    <td class="b-10">11011dfgfd</td>
                                                    <td class="b-10">11011derer</td>
                                                    <td class="b-10">11011erer</td>
                                                    <td class="b-10">11011dfgdf</td>
                                                    <td class="b-10">11011dfgfd</td>
                                                    <td class="b-10">11011derer</td>
                                                    <td class="b-10">11011erer</td>
                                                    <td class="b-10">11011derer</td>
                                                    <td class="b-10">11011erer</td>
                                                </tr>
                                            </table>
                                            <table class="table table-bordered tabled _hide">
                                                <tr class="parent_tab children_tab_top smasize children_last_top">
                                                    <th class="b-10">商品ID</th>
                                                    <th class="b-10">数量</th>
                                                    <th class="b-10">商品名称</th>
                                                    <th class="b-10">sku</th>
                                                    <th class="b-10">upc</th>
                                                    <th class="b-10">数量</th>
                                                    <th class="b-10">单价</th>
                                                    <th class="b-10">税率</th>
                                                    <th class="b-10">指定商品优惠金</th>
                                                    <th class="b-10">库存数</th>                                      
                                                </tr>
                                                <tr>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                    <td>sefefsf</td>
                                                </tr>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="page_box tr mr20">
                    <page :now-page="2" :total-count="200"></page>
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
    import selectmany from 'commonvue/select_many'
    import selectStarEndTime from 'commonvue/select_star_end_time'

    export default {
        components: {
            navBar,
            searc,
            page,
            pagelist,
            pagepop,
            selectmany,
            selectStarEndTime
        },
        data () {
            return {
                ischeckall:true,   //所有的主订单是否展开
                showPagepop:false,
                pagepopOptions:{
                    title:"修改地址",
                    icon:false,
                    isCloseBut:true,
                    width:750,//弹窗宽度
                },
                selectmany:[
                    {name:'第三方'},
                    {name:'分销'},
                    {name:'O2O'},
                ],
                choselist:[],
                startime:'',
                endtime:'',

            }
        },
        ready: function () {
           
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

            //主订单是否全部展开
            slideAll:function(){
                this.ischeckall=!this.ischeckall;
            },

            //修改地址
            showPagePop() {
                this.showPagepop=!this.showPagepop;
            },

            //弹出一些东西
            alertSomeThing(){
                alert('弹出某些东西')
            },
           
        }
    }
</script>