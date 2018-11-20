/**
 * cookie 工具类 添加、获取、删除
 */
var DateUtil = {
	getLongDate: function(){
		var date=new Date();
	   	return date.getTime();
	},
	getLongTime: function(){
		return new Date().getTime();
	},
	format : function(date) {
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var mm = month > 9 ? month : "0" + month;
		return year + "" + mm;
	},
	/**
	 *  yyyy-MM-dd h:m:s
	 *  new Date()
	 */
	formatDate: function(format, date){
		 var date = {
	              "M+": date.getMonth() + 1,
	              "d+": date.getDate(),
	              "h+": date.getHours(),
	              "m+": date.getMinutes(),
	              "s+": date.getSeconds(),
	              "q+": Math.floor((date.getMonth() + 3) / 3),
	              "S+": date.getMilliseconds()
	       };
	       if (/(y+)/i.test(format)) {
	              format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	       }
	       for (var k in date) {
	              if (new RegExp("(" + k + ")").test(format)) {
	                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
	                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
	              }
	       }
	       return format;
	},
	getFormatMonth: function(date){
		return DateUtil.formatDate("yyyy-MM", date);
	},
	getFormatDay: function(date){
		return DateUtil.formatDate("yyyy-MM-dd", date);
	},
	getNowFormatTime: function(date){
		return DateUtil.formatDate("yyyy-MM-dd h:m:s", date);
	}
}

module.exports = DateUtil;