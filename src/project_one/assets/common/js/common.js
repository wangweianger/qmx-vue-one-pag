
import config from './config'

//common 公共对象函数
class common{
	//初始化对象
	constructor(){
		this.win=window.top;
		this.UA=navigator.userAgent;
		this.isPC=this.UA.indexOf('Windows NT')>-1;
		this.isAndroid=this.UA.indexOf('Android')>-1;
		this.isIos=this.UA.indexOf('Mac OS X')>-1;
		this.isIphone=this.UA.indexOf('iPhone;')>-1;
		this.isIpad=this.UA.indexOf('iPad;')>-1;
		this.isIE7=this.UA.indexOf('MSIE 7.0;')>-1;
		this.isIE8=this.UA.indexOf('MSIE 8.0;')>-1;
		this.isIE9=this.UA.indexOf('MSIE 9.0;')>-1;
		this.isIE10=this.UA.indexOf('MSIE 10.0;')>-1;
		this.isIE11=this.UA.indexOf('Trident')>-1;
	};

	//封装的ajax函数
	ajax(json){
		var This=this;
		var noError=true;
		This.showLoading();
		$.ajax({
			type: json.type||"get",
			url: json.url,
			data: json.data||"",
			datatype:"json",
			success:function(data){
				if(!json.nohideloading){ This.hideLoading();};
				clearTimeout(timeout);
				if(typeof(data)=='string'){
					This.error(JSON.parse(data),json);
				}else{
					This.error(data,json);
				}
			},
			complete:function(XMLHttpRequest){
				if(!json.nohideloading){ This.hideLoading();};
				clearTimeout(timeout);
				if(json.complete){json.complete(XMLHttpRequest);}
			},
			error:function(XMLHttpRequest){
				This.hideLoading();
				clearTimeout(timeout);
				if(noError){
					This._error(XMLHttpRequest,json);
				};	
			}
		});
		var timeout=setTimeout(function(){
			This.hideLoading();
			// 请求超时
			noError=false;
			Popup.alert({type:'msg',title:'您的网络太慢了哦,请刷新重试!'});
		}, json.timeout||config.ajaxtimeout);
	};

	//file 文件上传
	fileAJAX(json){
		var This=this;
		var noError=true;
		$.ajax({
			type: json.type||"post",
			url: json.url,
			xhrFields: {
			    withCredentials: true
			},
			crossDomain: true,
			data: json.data||"",
			datatype:"json", 
            cache: false, 
            contentType: false,  
            processData: false, 
			success:function(data){
				This.hideLoading();
				clearTimeout(time);
				This.error(data,json);
			},
			error:function(XMLHttpRequest){
				This.hideLoading();
				json.error();
				This.clearTimeout(time);
				if(noError){
					_error(XMLHttpRequest,json);
				};	
			}
		});
		var time=setTimeout(function(){
			This.hideLoading();
			// 请求超时
			noError=false;
			Popup.alert({type:'msg',title:'您的网络太慢了哦,请刷新重试!'});
		}, json.timeout||config.ajaxtimeout);
	}

	/*FormData 上传文件函数*/
	cerateFileFormData(json){
		var This=this;
		var filename=json.filename?json.filename:'filename'
		var html='<div id="createFileHtml" class="hidden">\
					<form enctype="multipart/form-data" id="uploadForm">\
						<input type="file" name="'+filename+'" id="expInputFile"></div>\
					</form>';
		if(!$('#createFileHtml').length){
			$('body').append(html);
		}
		$('#expInputFile').click();	
		$('#expInputFile').change(function(){
			This.showLoading();
		    var formData = new FormData($( "#uploadForm" )[0]); 
		    if(json.data){
			    for(var i in json.data){
			    	formData.append(i, json.data[i]);
			    };
		    };
		    This.fileAJAX({
		    	url:json.url,
		    	data:formData,
		    	success:function(data){
		    		$('#createFileHtml').remove();
		    		json.callback(data);
		    	},
		    	error:function(){
		    		$('#createFileHtml').remove();
		    	}
		    });
		});
	}

	//error 处理函数
	error(data,json){
		//判断code 并处理
		var dataCode=parseInt(data.errCode);
		if(!json.pageSet && dataCode==-10000){
			//判断app或者web
			if(window.location.href.indexOf(config.loginUrl) == -1){ 
				sessionStorage.setItem("weixin-url", window.location.href); //记录没有登陆前的访问页面
				location.href=config.loginUrl;
			}else{
				Popup.alert({type:'msg',title:'用户未登陆,请登录!'});
			}
		}else{
			switch(dataCode){
				case 0:
					json.success(data);
					break;
				default:
					if(json.code){
						json.error(data);
					}else{
						//直接弹出错误信息
						Popup.alert({type:'msg',title:data.errMsg});
					};			
			}
		};
	}

	// _error 处理函数
	_error(XMLHttpRequest,json){
		this.hideLoading();
			if(json.code){
				json.error(JSON.parse(XMLHttpRequest.responseText));
			}else{
				switch(XMLHttpRequest.status){
					case 401:
						if(window.location.href.indexOf(config.loginUrl) == -1){ 
							sessionStorage.setItem("weixin-url", window.location.href); //记录没有登陆前的访问页面
							window.location.href=config.loginUrl;
						}else{
							Popup.alert({type:'msg',title:"你需要登录哦"});
						};
						break;
					case 400:
						Popup.alert({type:'msg',title:"您的请求不合法呢"});
						break;	
					case 404:
						Popup.alert({type:'msg',title:"访问的地址可能不存在哦"});
						break;		
					case 500:case 502:
						Popup.alert({type:'msg',title:"服务器内部错误"});
						break;		
					// default:
					// 	Popup.alert({type:'msg',title:"未知错误。程序员欧巴正在赶来修改哦"});	
				}
			}
	}

	// 获取当前时间毫秒
	time(){
		return new Date().getTime();
	}

	/*根据参数生成常用的正则表达式
	*string    type 生成的正则表达式类型
	*array     numArr 生成正则的条件数组 例如:[6,16] 也可省略
	*/
	regCombination(type,numArr){
		var reg="";
		switch(type){
			case "*":     //"*":"不能为空！"   
				if(numArr){
					reg=new RegExp("^[\\w\\W]{"+numArr[0]+","+numArr[1]+"}$"); 
				}else {
					reg=new RegExp("^[\\w\\W]+$"); 
				}  
				break;
			case "n":    //"number":"请填写数字！
				if(numArr){
					reg=new RegExp("^\\d{"+numArr[0]+","+numArr[1]+"}$");
				}else{
					reg=new RegExp("^\\d+$");
				}
				break;
			case "s":  //"s":"不能输入特殊字符！"   
				if(numArr){
					reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]{"+numArr[0]+","+numArr[1]+"}$");
				}else{
					reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]+$");
				}
				break; 
			case "c":  //"z":"中文验证" 
				reg=new RegExp("^[\\u4E00-\\u9FA5\\uf900-\\ufa2d]{"+numArr[0]+","+numArr[1]+"}$");
				break;	
			case "p":    //"p":"邮政编码！
				reg=new RegExp("^[0-9]{6}$");
				break;	
			case "m":    //"m":"写手机号码！"
				reg=new RegExp("^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$");
				break;	
			case "e":   //"e":"邮箱地址格式
				reg=new RegExp("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
				break;
			case "id":   //"id":验证身份证
				reg=new RegExp("^\\d{17}[\\dXx]|\\d{14}[\\dXx]$");
				break;
			case "money": //钱
				reg=new RegExp("^[\\d\\.]+$");	
				break;	
			case "url":   //"url":"网址"
				reg=new RegExp("^(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*$");
				break;	
			case "u":    //
				reg=new RegExp("^[A-Z\\d]+$");
				break;
		}
		return reg;
	}

	/*extent json函数*/
	extend (json1,json2){
		var newJson=json1;
		for(var j in json2){
			newJson[j]=json2[j];
		}
		return newJson;
	}

}

//初始化common对象
module.exports=new common();






