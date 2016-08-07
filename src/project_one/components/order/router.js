//order 模块路由设置
module.exports = {
    '/order': {
        component: function (resolve) {
            require(['./order.vue'],resolve)
        }
    },
}



