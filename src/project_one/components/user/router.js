//user 模块路由
module.exports = {
    '/user': {
        component: function (resolve) {
            require(['./user.vue'],resolve)
        }
    },
}



