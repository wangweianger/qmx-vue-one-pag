import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import routerMap from './router'
import filter from './filter'
import $ from 'jquery'
import config from 'common/js/config'
import common from 'common/js/common'


// 路由模块和HTTP模块
Vue.use(VueRouter);

// 使用filter
for(var k in filter){
    Vue.filter(k, filter[k]);
};

const router = new VueRouter();
console.log(typeof(routerMap))

routerMap(router)
router.start(App, 'app');

