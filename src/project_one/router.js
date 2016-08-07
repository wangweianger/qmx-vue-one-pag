//router.js 路由集合
import common from 'common/js/common'
import indexRouter from 'components/index/router'
import orderRouter from 'components/order/router' 
import userRouter from 'components/user/router'

//定义用的路由集合
var arrRouter=[indexRouter,orderRouter,userRouter];

//合并路由
var json={};
for(var i=0;i<arrRouter.length;i++){
	json=common.extend(json,arrRouter[i]);
};
module.exports = function(router){
    router.map(json)
}

