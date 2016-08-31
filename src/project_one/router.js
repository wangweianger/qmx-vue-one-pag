//router.js 路由集合
import common from 'common/js/common'
import indextRouter from 'components/index/router'
import orderRouter from 'components/order/router'

//定义用的路由集合
var arrRouter = [indextRouter,orderRouter];


//合并路由
var json = {
	'/': {
    	title: '订单列表',
    	name:'order_list',
        component: resolve => require(['components/order/order_list.vue'], resolve)
    },
};
for (var i = 0; i < arrRouter.length; i++) {
	json = common.extend(json, arrRouter[i]);
};
module.exports = function(router) {
	router.map(json)
}