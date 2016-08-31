import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import routerMap from './router'
import filter from './filter'
import VueValidator from 'vue-validator'
import $ from 'jquery'
import config from 'common/js/config'
import common from 'common/js/common'
import popup from 'popup'

//分页
require('common/lib/page/page.css'); 
require('page'); 
//表单验证
import validform from 'common/js/validform'
//bootstrap
require('common/lib/bootstrap/css/bootstrap.css'); 
require('common/lib/bootstrap/js/bootstrap.js'); 
//时间选择器
require('common/lib/daterangepicker/css/daterangepicker.css');
require('common/lib/daterangepicker/js/daterangepicker.js');
//公用样式文件
require('common/css/base.scss'); 

Vue.config.debug = true;//开启错误提示
// 路由模块和HTTP模块
Vue.use(VueRouter);
// vue表单验证插件
Vue.use(VueValidator);
// 使用filter
for(var k in filter){
    Vue.filter(k, filter[k]);
};

window["validform"]=validform
window["common"] = common
window["config"] = config
window["popup"] = popup

/*--------------------------------------------dom操作 相关 -------------------------------------------------------*/
/*  new Date().date('y-m-d h:i:s'); => 2015-11-02 17:11:55
	new Date(115165165165).date('y-m-d') => 2015-11-02
*/
Date.prototype.date=function(format){
	var 
	year=this.getFullYear(),
	month=common.getZero(this.getMonth()+1),
	day=common.getZero(this.getDate()),
	hour=common.getZero(this.getHours()),
	minute=common.getZero(this.getMinutes()),
	second=common.getZero(this.getSeconds()),
	json={
		'y': year,
		'm': month,
		'd': day,
		'h': hour,
		'i': minute,
		's': second
	};
	return !format?year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second:format.replace(/y|m|d|h|i|s/g, function(str){
		return json[str];
	});
};

/*---------- start 布局写入  ------------*/
window==window.top && document.write('<div id="loading"></div>');
/*---------- end 布局写入    ------------*/

/*--------------------------------------------dom操作 相关 end -------------------------------------------------------*/


//创建路由
const router = new VueRouter();

//设置title
router.beforeEach(function (transition) {
	$("#content").hide()
  	document.title=transition.to.title || '启明星'
  	window.scrollTo(0, 0)
    transition.next()
})
router.afterEach(function (transition) {
 	$("#content").fadeIn()
})
routerMap(router)
router.start(App, 'app');

