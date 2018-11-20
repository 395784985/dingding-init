/**
 * cookie 工具类 添加、获取、删除
 */
var CookieUtil = {
	setCookie: function(name, value, expiredays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString());
	},
	getCookie: function(name){
		//测试用
//		return $("#"+name).val();
		if (document.cookie.length > 0){
			var c_start = document.cookie.indexOf(name + "=");
			if (c_start != -1){ 
			    c_start = c_start + name.length + 1; 
			    var c_end = document.cookie.indexOf(";", c_start)
			    if (c_end == -1) 
			    	c_end = document.cookie.length;
			    return unescape(document.cookie.substring(c_start, c_end));
		    } 
		}
		return "";
	},
	delCookie: function(name){
		let t = this;
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = t.getCookie(name);
		if(cval != null)
		document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}

module.exports = CookieUtil;