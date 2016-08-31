//order 模块路由设置
module.exports = {
    '/index': {
    	title: '首页了额',
    	name:'index',
        component: resolve => require(['./index.vue'], resolve)
    },
    '/index/:page': {
    	title: '首页了额',
    	name:'index-page',
        component: resolve => require(['./index.vue'], resolve)
    },
}



