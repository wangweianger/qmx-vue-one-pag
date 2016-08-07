//order 模块路由设置
module.exports = {
    '/': {
        component: function (resolve) {
            require(['./index.vue'],resolve)
        }
    },
}



