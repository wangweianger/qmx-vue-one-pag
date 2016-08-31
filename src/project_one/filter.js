//filter.js 过滤器集合
import common from 'common/js/common'
import orderFilder from 'components/order/filter'

//定义用的路由集合
var arrFilder = [orderFilder];

// 公共过滤器
var json = {
		//limitTo过滤器
		limitTo: function(value, num) {
			var text = "";
			if (value) {
				if (value.length < num) {
					text = value;
				} else {
					text = value.substring(0, num) + '···';
				}
			}
			return text;
		},
	}
	//合并过滤器
for (var i = 0; i < arrFilder.length; i++) {
	json = common.extend(json, arrFilder[i]);
};

module.exports = json;