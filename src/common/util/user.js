const CookieUtil = require('./cookie.js');

/**
 * 钉钉获取用户信息
 */
var Dyd = {
	//获取当前userid
	getUserId: function(){
		var obj = CookieUtil.getCookie("userid");
     	if(obj==null || obj==''){
     		obj = document.getElementById("userid").value;
     	}
     	return obj;
	},
	//获取部门
	getDeptId: function(){
		var obj = CookieUtil.getCookie("deptid");
     	if(obj==null || obj==''){
     		obj = document.getElementById("deptid").value;
     	}
     	return obj;
	},
	//获取用户名称
	getUserName:function(){
		var obj = CookieUtil.getCookie("userName");
     	if(obj==null || obj==''){
     		obj = document.getElementById("userName").value;
     	}
     	return obj;
	},
	//获取用户名称
	getAuthcode:function(){
		var obj = CookieUtil.getCookie("authcode");
     	if(obj==null || obj==''){
     		obj = document.getElementById("authcode").value;
     	}
     	return obj;
	}
}
module.exports = Dyd;
