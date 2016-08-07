// 过滤器
module.exports={
	//limitTo过滤器
	limitTo:function(value,num){
		var text="";
		if(value){
			if(value.length<num){
				text=value;
			}else{
				text=value.substring(0,num)+'···';
			}
		}
	  	return text;
	},


}



