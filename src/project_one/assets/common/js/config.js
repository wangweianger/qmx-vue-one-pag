/*-------------------------------------------后台配置------------------------------------------------*/ 
module.exports={
	//登陆页面 
	loginUrl:"/login.html", 

	//登陆成功后需要跳转到的页面                                                       
	homeUrl: "/index.html",    

	//根接口
	// baseApi:'http://testdms.morning-star.cn/api/',
	baseApi:'http://127.0.0.1:8080/api/',

	// 测试服基础数据服务器接口
	baseDataApiUrl : "http://106.75.148.54/central-common/api/",

	// 测试服档案服务器接口
	baseFileApiUrl : "http://106.75.148.54/central-info/api/",

	//测试服商品服务器接口
	baseProductApiUrl : "http://106.75.148.54/central-product/api/",

	//支付接口
	payApi:'http://test.cs0526.allpyra.com/pay/',

	//ajax 请求超时时间
	ajaxtimeout:8000,

	//发送验证码时间间隔
	msgTime:60,
	                            
 	//隐藏显示时间
 	containerShowTime:10,

 	//pagesize 分页数量
 	pageSize:20,

 	// 仓库类型枚举数据
 	wareType : [
 		{
 			value : 1,
 			name : "保税仓"
 		},
 		{
 			value : 2,
 			name : "完税仓"
 		},
 		{
 			value : 3,
 			name : "直邮仓"
 		},
 		{
 			value : 4,
 			name : "直邮虚拟仓"
 		},
 		{
 			value : 5,
 			name : "保税代发仓"
 		},
 		{
 			value : 6,
 			name : "完税代发仓"
 		},
 		{
 			value : 7,
 			name : "直邮代发仓"
 		}
 	]
 	//登录或者绑定手机等成功后 跳转到上一页面或者首页
    // prevUrl:common.getNextUrl(),

};
