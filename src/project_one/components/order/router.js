//order 模块路由设置
module.exports = {
    '/order/order_list': {
    	title: '主订单列表',
    	name:'order_list',
        component: resolve => require(['./order_list.vue'], resolve)
    },
    '/order/order_list_children': {
        title: '子订单列表',
        name:'order_list_children',
        component: resolve => require(['./order_list_children.vue'], resolve)
    },
    '/order/order_bulkimpor': {
        title: '批量更改订单',
        name:'order_bulkimpor',
        component: resolve => require(['./order_bulkimpor.vue'], resolve)
    },
    '/order/order_refund': {
        title: '退款申请列表',
        name:'order_refund',
        component: resolve => require(['./order_refund.vue'], resolve)
    },
    '/order/order_import_erp': {
        title: '结算单导入ERP',
        name:'order_import_erp',
        component: resolve => require(['./order_import_erp.vue'], resolve)
    },
    '/order/order_exports': {
        title: '导出对账单',
        name:'order_exports',
        component: resolve => require(['./order_exports.vue'], resolve)
    },
    '/order/order_erp_push_record': {
        title: 'ERP推送记录',
        name:'order_erp_push_record',
        component: resolve => require(['./order_erp_push_record.vue'], resolve)
    },
    '/order/order_customs_duties': {
        title: '海关关税标记',
        name:'order_customs_duties',
        component: resolve => require(['./order_customs_duties.vue'], resolve)
    },





    '/order/order_pushce': {
        title: '推送国检以及订单导出',
        name:'order_pushce',
        component: resolve => require(['./order_pushce.vue'], resolve)
    },
    '/order/order_pushpingdd': {
        title: '拼多多订单导入',
        name:'order_pushpingdd',
        component: resolve => require(['./order_pushpingdd.vue'], resolve)
    },
    '/order/order_pushjd': {
        title: '京东订单导入',
        name:'order_pushjd',
        component: resolve => require(['./order_pushjd.vue'], resolve)
    },
    '/order/order_jdlist': {
        title: '京东JD订单列表',
        name:'order_jdlist',
        component: resolve => require(['./order_jdlist.vue'], resolve)
    },
    
    
    
    
}



