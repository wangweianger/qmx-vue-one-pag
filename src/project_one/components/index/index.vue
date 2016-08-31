<style lang="sass" scoped>
    .swiper-slide{height:300px;background:#ccc;}
</style>

<template>
<div class="container-fluid">
    <button v-on:click="alertSomeThing()">第一个弹出层</button>
    <a v-link="{ path: '/user', exact: true }">go User</a><br>
    <a v-link="{ path: '/order', exact: true }">go order</a>
    <a v-link="{ path: '/form', exact: true }">go form</a>
    <button @click="alertconfig">弹出组件</button>
    <banner></banner>
    <page :now-page="2" :total-count="200"></page>
      <pop :options.sync="infopopOptions" :show.sync="showinfoPop"></pop>
      <br/>
      <p  @click="alertPop" style="color:red;margin-left:100px;font-size:20px">弹出信息层</p>
      <p  @click="showPop" style="color:red;margin-left:100px;font-size:20px">弹出确认层</p>
      <confirmpop :options.sync="options" :show.sync="show" :callback="alertSomething"></confirmpop>
      <br/>
    <button class="btn btn-success" @click="upload">上传文件</button>
    <button class="btn btn-success" @click="go">asdfasdfsad</button>
      <button @click="showMissPop" style="color:red;margin-left:100px;font-size:20px">弹出自动消失弹窗</button>
      <misspop :options.sync="misspopoptions" :show.sync="showmiss"></misspop>
      <button @click="showPagePop" style="color:red;margin-left:100px;font-size:20px">弹出页面弹窗</button>
      <pagepop :options.sync="pagepopOptions" :show.sync="showPagepop">
          <!--使用slot插槽分发内容-->
          <div slot="content">
              <p v-for="item in testData">{{item}}</p>
          </div>
      </pagepop>
      <!-- 双向绑定 -->
      <div>
      <div>我改变了额</div>
      <inputvue :username.sync="username" :age.sync="age" ></inputvue>
      {{username}} +++++++++----     {{age}}


      </div>
      <div class="mb20 clear" ></div>
      <!-- 时间选择器 -->
      <div>
            <h1>时间选择器 - 开始+结尾</h1>
            <div class="input-prepend input-group">
                <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                <input type="text" style="width: 200px" name="reservation" id="reservation" class="form-control" placeholder="自定义时间筛选-开始+结尾" />
            </div>
            <div class="mb20 clear" ></div>
            <h1>时间选择器 - 单个</h1>
            <div class="input-prepend input-group" id="reservation_1">
                <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                <input type="text" style="width: 200px" name="reservation"  class="form-control" placeholder="自定义时间筛选-单个" />
            </div>
            <div class="mb20 clear" ></div>
            <h1>时间选择器 组件封装 </h1>
            <div class="w-300">
                <select-star-end-time :startime.sync="startime" :endtime.sync="endtime" placeholder="选择查询订单时间区间" singledatepicker="false" effective-time="5"></select-star-end-time>
            </div>
           
      </div>  
    <div class="mb20 clear" ></div>  
<!-- swiper demo -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>      
    <div class="mb20 clear" ></div>  
<!-- *****************************common_block****************************************** -->
    <div class="col-sm-5 common_block mr20">
        <div class="head head-primary">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>
    <!-- 2 -->
    <div class="col-sm-5 common_block">
        <div class="head head-success">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>

    <div class="mb20 clear" ></div>
    <!-- 2 -->
    <div class="col-sm-5 common_block mr20">
        <div class="head head-info">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>
    <!-- 2 -->
    <div class="col-sm-5 common_block">
        <div class="head head-warning">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>
    <div class="mb20 clear" ></div>
    <!-- 2 -->
    <div class="col-sm-5 common_block mr20">
        <div class="head head-danger">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>
    <!-- 2 -->
    <div class="col-sm-5 common_block">
        <div class="head head-default">
            <i class="largeiconfont">&#xe61f;</i><span>产品中心</span>
        </div>
        <div class="contener">
            这里面就是其中的内容
        </div>
    </div>
    
<!-- *****************************common_line****************************************** -->
    <div class="mb20 clear" ></div>
    <div class="col-sm-5 common_line mr20">
        <div class="contener line-default">
            这里面就是其中的内容
        </div>
    </div>
    <div class="col-sm-5 common_line">
        <div class="contener line-primary">
            这里面就是其中的内容
        </div>
    </div>
    <div class="mb20 clear"></div>
    <div class="col-sm-5 common_line mr20">
        <div class="contener line-success">
            这里面就是其中的内容
        </div>
    </div>
    <div class="col-sm-5 common_line">
        <div class="contener line-info">
            这里面就是其中的内容
        </div>
    </div>
    <div class="mb20 clear"></div>
    <div class="col-sm-5 common_line mr20">
        <div class="contener line-warning">
            这里面就是其中的内容
        </div>
    </div>
    <div class="col-sm-5 common_line">
        <div class="contener line-danger">
            这里面就是其中的内容
        </div>

    </div>
    <div class="mb20 clear" ></div>
    <div class="col-sm-12 common_line">
        <div class="contener line-info">
                <div class="checktable">
                    <table class="table checkall_table">
                        <tr>
                            <th><label><input @click="allclick($event)" type="checkbox"/>全选</label></th>
                            <th>全选操作</th>
                            <th>全选操作</th>
                            <th>全选操作</th>
                            <th>全选操作</th>
                            <th>全选操作</th>
                        </tr>
                        <tr v-for="item in listdata" track-by="$index">
                            <td>{{item.isChecked}}
                                <input v-on:click="checkedOne(item)" :checked="item.isChecked?true:false" type="checkbox"/>
                            </td>
                            <td v-text="item.productName"></td>
                            <td v-text="item.productId"></td>
                            <td v-text="item.productName"></td>
                            <td v-text="item.productType"></td>
                            <td v-text="item.productType"></td>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
    <div class="mb20 clear" ></div>

<!-- 表单验证相关 -->
    <form id="chechForm" class="form-group" >
        <p>用户名：<input type="text" class="text form-control" name="username" placeholder="请输入用户名"  datatype="*4-15"  sucmsg="用户名验证通过"  errormsg="请输入4-16位的字符" /> 
        </p> 
        <p>邮箱：<input type="text" class="text form-control" ignore="ignore" name="username" placeholder="请输入邮箱" datatype="e"   sucmsg="邮箱验证通过"   errormsg="请输入正确的邮箱 可验证项"/>  
        </p>
         <p>手机号：<input type="text" class="text form-control" name="username" placeholder="请输入手机号" datatype="m" sucmsg="手机验证通过"   errormsg="请输入正确的手机号码"   /> 
        </p>
        <p>密码:<input class="text form-control" type="password" name="passwd" datatype="*4-16" errormsg="请输入4-16位的字的密码"  sucmsg="密码验证通过"></p>
        <p>确认密码：<input class="text form-control" type="password" name="passwdcfn" datatype="*" recheck="passwd" errormsg="两次密码不一致"  sucmsg="确认密码验证通过"></p>
       
        <p>
         性别：男：<input type="radio" name="gender" checked="checked" value="男" datatype="*" sucmsg="性别验证通过" errormsg="请选择性别"/>
         女：<input type="radio"  name="gender"  value="女" datatype="*" sucmsg="性别验证通过" errormsg="请选择性别"/>
         春哥：<input type="radio" name="gender" value="春哥" datatype="*" sucmsg="性别验证通过" errormsg="请选择性别"/>
        </p>
        <p>
          爱好：
          篮球<input type="checkbox" name="hobby" value="篮球"  datatype="*" sucmsg="爱好验证通过" errormsg="爱好最少选择两项"/>
          足球<input type="checkbox" name="hobby" value="足球"  datatype="*" sucmsg="爱好验证通过" errormsg="爱好最少选择两项"/>
          台球<input type="checkbox" name="hobby" value="台球"  datatype="*" sucmsg="爱好验证通过" errormsg="爱好最少选择两项"/>
          棒球<input type="checkbox" name="hobby" value="棒球"  datatype="*" sucmsg="爱好验证通过" errormsg="爱好最少选择两项"/>
        </p>
        <p>
        <input class="form-control" type="file" datatype="*" name="touxiang" sucmsg="文件验证通过" errormsg="请选择文件"/>
        </p>
        <p>
         <select name="xueli" datatype="*" sucmsg="学历验证成功" errormsg="请选择学历">
           <option value="">请选择学历</option>
           <option value="小学">小学</option>
           <option value="中学">中学</option>
           <option value="大学" checked="checked">大学</option>
           <option value="博士">博士</option>
          </select>
        </p>
        <p><textarea class="text form-control" name="introduce" datatype="s" ></textarea></p>
        <p><button type="b  utton" class="submit btn btn-primary">确认注册</button></p>
    </form>
    



</div>
</template>

<script>
    import Vue from 'vue'
    import {alertSomeThing} from './vuex/action'
    import banner from './banner'
    import page from 'commonvue/page'
    import pop from 'commonvue/pop'
    import confirmpop from 'commonvue/confirm_pop'
    import common from 'common/js/common'
    import misspop from 'commonvue/miss_pop'
    import pagepop from 'commonvue/page_pop'
    import inputvue from 'commonvue/input'
    import tablecomponent from 'commonvue/table'
    import search from 'commonvue/search'
    require('common/lib/swiper/swiper.min.css'); 
    import swiper from 'common/lib/swiper/swiper.min.js'
    import selectStarEndTime from 'commonvue/select_star_end_time'

    export default {
        components: {
            banner,
            page,
            pop,
            confirmpop,
            misspop,
            pagepop,
            inputvue,
            tablecomponent,
            search,
            selectStarEndTime
        },
        data(){
            return {
                //普通弹窗参数
                options:{
                    content: "<div><p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p></div>" ,
                    title:"我是标题",
                    icon: "icon-2",//标题图标
                    autoClose:false,//是否自动关闭
                    showTime:2000,//自动关闭时间
                    clickMaskClose :false,//点击遮罩层关闭弹窗
                    showCloseBtn:true, //是否显示关闭按钮
                    width:250//弹窗宽度
                },
                //控制普通弹窗显示、隐藏
                show:false,
                //自动关闭弹窗参数
                misspopoptions:{
                    content: "2S后消失" ,
                    autoClose:true,//是否自动关闭
                    showTime:2000,//自动关闭时间
                    clickMaskClose :true,//点击遮罩层关闭弹窗
                },
                //控制自动关闭弹窗显示、隐藏
                showmiss:false,
                //传递HTML模板弹窗参数（slot）
                pagepopOptions:{
                    content: "<div><p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p></div>" ,
                    title:"我是标题",
                    icon: "icon-2",//标题图标
                    autoClose:false,//是否自动关闭
                    showTime:2000,//自动关闭时间
                    clickMaskClose :false,//点击遮罩层关闭弹窗
                    showCloseBtn:true, //是否显示关闭按钮
                    width:250//弹窗宽度
                },
                //控制HTML弹窗显示、隐藏
                showPagepop:false,
                testData:["启明星电子商务1","启明星电子商务2","启明星电子商务3"],
                infopopOptions:{
                    content: "<div><p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是" +
                    "内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p></div>" ,
                    title:"我是标题",
                    icon: "icon-2",//标题图标
                    autoClose:false,//是否自动关闭
                    showTime:2000,//自动关闭时间
                    clickMaskClose :true,//点击遮罩层关闭弹窗
                    showCloseBtn:true,//是否显示关闭按钮
                    width:250//弹窗宽度
                },
                showinfoPop:false,
                username:'wangwei',
                age:'20',
                columndata:[{
                        name: '产品名称',
                        key: 'productName'
                    }, {
                        name: '产品ID',
                        key: 'productId'
                    }, {
                        name: '类目',
                        key: 'productType'
                    }, {
                        name: '品牌',
                        key: 'trademark'
                    }, {
                        name: 'UPC',
                        key: 'UPC'
                    }, {
                        name: '产地',
                        key: 'productArea'
                    }, {
                        name: '状态',
                        key: 'status'
                    }, {
                        name: '操作',
                        key: 'options'
                }],
                listdata:[],
                search:[{
                    name: '产品名称',
                    value: ''
                }, {
                    name: '产品ID',
                    key: 'productId'
                }, {
                    name: '类目',
                    key: 'productType'
                }, {
                    name: '品牌',
                    key: 'trademark'
                }, {
                    name: 'UPC',
                    key: 'UPC'
                }, {
                    name: '产地',
                    key: 'productArea'
                }, {
                    name: '状态',
                    key: 'status'
                }, {
                    name: '操作',
                    key: 'options'
                }],
                //时间选择器
                startime:'',
                endtime:'',

            }
        },
        vuex: {
            getters: {
                index: ({ index }) => index
                // index: state => state.index
            },
            actions: {
                alertSomeThing
            }
        },
        ready:function(){
            //时间选择器控件
            $('#reservation').daterangepicker({format: 'YYYY/MM/DD'},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
            });
            //单个时间选择器
            $('#reservation_1').daterangepicker({format: 'YYYY/MM/DD',singleDatePicker: true},
            function(start, end, label) {
                console.log(start.toISOString()+'=='+end.toISOString());
            });

            //swiper demo
            new swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                keyboardControl: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            });
            
            //表单验证
            validform({
                check:$('#chechForm'),
                hobbyLenght:2,
                ajaxRun:function(){
                    alert("00")
                    //ajax
                }
            });

            //table
            var data=[
                {
                    productName: '德国爱他美奶粉 1段 600g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美1',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                },
                {
                    productName: '德国爱他美奶粉 1段 500g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美2',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                }, 
                {
                    productName: '德国爱他美奶粉 1段 400g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美3',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                }, {
                    productName: '德国爱他美奶粉 1段 300g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                }, {
                    productName: '德国爱他美奶粉 1段 600g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                }, {
                    productName: '德国爱他美奶粉 1段 600g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
                }, {
                    productName: '德国爱他美奶粉 1段 600g',
                    productId: '606271553470002',
                    productType: '婴幼儿牛奶粉',
                    trademark: '爱他美',
                    UPC: '11111',
                    productArea: '中国',
                    status: '待完善',
            }];
            for(var i=0;i<data.length;i++){
                data[i]['isChecked']=false;
            }
            this.listdata=data;
            console.log(JSON.stringify(this.listdata[0]));
        },
        methods: {
            //单选
            checkedOne:function(item){
                if(item.isChecked){
                    item.isChecked=false;
                }else{
                    item.isChecked=true;
                }
                console.log(JSON.stringify(item))
            },
            //全选
            allclick:function($event){
                var This=this;
                var _ischecked=$($event.target).prop('checked')
                if(_ischecked){
                    for(var i = 0,len=This.listdata.length; i<len;i++) {
                        // This.listdata[i].isChecked=true;
                        // var json=common.extend(This.listdata[i],{isChecked:true})
                        // This.listdata.$set(i, json )
                        Vue.set(This.listdata[i],'isChecked',true);
                    }
                }else{
                    for(var i = 0,len=This.listdata.length; i<len;i++) {
                        // This.listdata[i].isChecked=false;
                        // var json=common.extend(This.listdata[i],{isChecked:false})
                        // This.listdata.$set(i, json )
                        Vue.set(This.listdata[i],'isChecked',false);
                    }
                }
                console.log(JSON.stringify(This.listdata[0]))
                
            },
            upload : function(){
                common.cerateFileFormData({
                    filename : "test",
                    url : "/",
                    data:{
                        name:'wangwei',
                        age:25
                    },
                    success:function(data){
                        console.log(data);
                    }
                })
            },
            alertSomething: function () {
                alert('我会弹出来一些东西111')
            },
            alertSomething2: function () {
                alert('我会弹出来一些东西2222')
            },
            //弹出确认层
            showPop() {
                this.show=!this.show;
            },
            go : function(){
                this.$route.router.go({
                     name: "form",
                      // params 和 query 可选
                      params: {},
                      query: {
                        pid : "astqwetqwetqwetqwet",
                        index : "asdfasdfasdf"
                      }
                })
            },
            //弹出自动消失层
            showMissPop() {
                this.showmiss=!this.showmiss;
            },
            alertconfig() {

            },
            //弹出页面层
            showPagePop() {
                this.showPagepop=!this.showPagepop;
            },
            //弹出信息层
            alertPop() {
                this.showinfoPop=!this.showinfoPop;
            }
           
        }
    }
</script>
<style lang="sass">
    .checkall_box {
        display: block;
        margin:30px;
        background: #fff;
        overflow: hidden;
        .allclick {
            line-height:30px;
            font-size: 14px;
        }
        
    }
    .checktable {
            overflow: hidden;
            table {
                width: 100%;
                border-collapse: collapse;
                border:1px solid #ccc;
                th,td {
                    line-height:40px;
                }
            }
        }
</style>

