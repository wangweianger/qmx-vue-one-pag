/*-------------------------------------------后台配置------------------------------------------------*/ 
module.exports={
	//登陆页面 
	loginUrl:"/login.html", 

	//登陆成功后需要跳转到的页面                                                       
	homeUrl: "/index.html",    

	//根接口
	// baseApi:'http://testdms.morning-star.cn/api/',
	baseApi:'http://127.0.0.1:8080/api/',

	//支付接口
	payApi:'http://test.cs0526.allpyra.com/pay/',

	//ajax 请求超时时间
	ajaxtimeout:8000,

	//发送验证码时间间隔
	msgTime:60,
	                            
 	//隐藏显示时间
 	containerShowTime:10,

 	//登录或者绑定手机等成功后 跳转到上一页面或者首页
    // prevUrl:common.getNextUrl(),

};
