const _config = require('./env');
const CookieUtil = require('../util/cookie.js');

var dingsdk = {
	author : function() {
		console.log("dingsdk zhaoxudong...");
	},
	alert : function(title, message) {
		console.log("dingsdk alert...")
		
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.alertPC(title, message);
		}else{
			this.alertClient(title, message);
		}
	},
	confirm:function(message, cb){
		console.log("dingsdk confirm...")
		
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.confirmPC(message, cb);
		}else{
			this.confirmClient(message, cb);
		}
	},
	chooseEmpId : function(users, cb) {
		console.log("dingsdk chooseEmpId...")
		
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.chooseEmpIdPC(users, cb);
		}else{
			this.chooseEmpIdClient(users, cb);
		}
	},
	chooseDept : function(cb) {
		console.log("dingsdk chooseDept...")
		
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.chooseDeptPC(cb);
		}else{
			this.chooseDeptClient(cb);
		}
	},
	complexPicker:function(cb){
		console.log("dingsdk complexPicker...")
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.complexPickerPC(cb);
		}else{
			this.complexPickerClient(cb);
		}
	},
	setTitle:function(title){
		console.log("dingsdk setTitle...")
		if(navigator.userAgent.indexOf('Windows') > -1){
			this.setTitlePC(title);
		}else{
			this.setTitleClient(title);
		}
	},
	setTitlePC:function(title){
		DingTalkPC.biz.navigation.setTitle({
		    title: title,//标题
		    onSuccess : function(result) {
		        /**/
		    },
		    onFail : function() {}
		})
	},
	setTitleClient:function(title){
		dd.biz.navigation.setTitle({
		    title : title,//控制标题文本，空字符串表示显示默认文本
		    onSuccess : function(result) {
		        /*结构
		        {
		        }*/
		    },
		    onFail : function(err) {}
		});
	},
	chooseEmpIdClient : function(users, cb) {
		dd.biz.contact.choose({
			startWithDepartmentId : 0, // -1表示打开的通讯录从自己所在部门开始展示,
										// 0表示从企业最上层开始，(其他数字表示从该部门开始:暂时不支持)
			multiple : true, // 是否多选： true多选 false单选； 默认true
			users : users, // 默认选中的用户列表，userid；成功回调中应包含该信息
			disabledUsers : [],// 不能选中的用户列表，员工userid
			corpId : _config.corpId, // 企业id
			max : 50, // 人数限制，当multiple为true才生效，可选范围1-1500
			limitTips : "user is too more! ", // 超过人数限制的提示语可以用这个字段自定义
			isNeedSearch : true,// 是否需要搜索功能
			title : '', // 如果你需要修改选人页面的title，可以在这里赋值
			local : false, // 是否显示本地联系人，默认false
			onSuccess : function(data) {
				// onSuccess将在选人结束，点击确定按钮的时候被回调
				/*
				 * data结构 [{ "name": "张三", //姓名 "avatar":
				 * "http://g.alicdn.com/avatar/zhangsan.png" //头像图片url，可能为空
				 * "emplId": '0573', //userid }, ... ]
				 */
				cb(data);
			},
			onFail : function(err) {
				cb(err);
			}
		});
	},
	alertClient : function(title, message) {
		dd.device.notification.alert({
			message : message,
			title : title,// 可传空
			buttonName : "确定",
			onSuccess : function() {
				/* 回调 */
			},
			onFail : function(err) {
			}
		});
	},
	confirmClient: function(message, cb){
		dd.device.notification.confirm({
		    message: message,
		    title: "提示",
		    buttonLabels: ['确定', '取消'],
		    onSuccess : function(result) {
		        /*
		        {
		            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
		        }
		        */
		    	cb(result);
		    },
		    onFail : function(err) {cb(err)}
		});
	},
	confirmPC: function(message, cb){
		DingTalkPC.device.notification.confirm({
		    message: message,
		    title: "提示",
		    buttonLabels: ['确定', '取消'],
		    onSuccess : function(result) {
		        /*
		        {
		            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
		        }
		        */
		    	cb(result);
		    },
		    onFail : function(err) {cb(err)}
		});
	},
	chooseEmpIdPC : function(users, cb) {
		DingTalkPC.biz.contact.choose({
			multiple : false, // 是否多选： true多选 false单选； 默认true
			users : users, // 默认选中的用户列表，员工userid；成功回调中应包含该信息
			corpId : _config.corpId, // 企业id
			max : 50, // 人数限制，当multiple为true才生效，可选范围1-1500
			onSuccess : function(data) {
				/*
				 * data结构 [{ "name": "张三", //姓名 "avatar":
				 * "http://g.alicdn.com/avatar/zhangsan.png" //头像图片url，可能为空
				 * "emplId": '0573', //员工userid }, ... ]
				 */
				cb(data);
			},
			onFail : function(err) {
				cb(err);
			}
		});
	},
	alertPC : function(title, message) {
		DingTalkPC.device.notification.alert({
		    message: message,
		    title: title,//可传空
		    buttonName: "确定",
		    onSuccess : function() {
		        /*回调*/
		    },
		    onFail : function(err) {}
		});
	},
	complexPickerClient : function(cb) {
		dd.biz.contact.complexPicker({
			title : "部门&员工搜索", // 标题
			corpId : _config.corpId, // 企业的corpId
			multiple : true, // 是否多选
			limitTips : "超过了限定人数", // 超过限定人数返回提示
			maxUsers : 1000, // 最大可选人数
			pickedUsers : [], // 已选用户
			pickedDepartments : [], // 已选部门
			disabledUsers : [], // 不可选用户
			disabledDepartments : [], // 不可选部门
			requiredUsers : [], // 必选用户（不可取消选中状态）
			requiredDepartments : [], // 必选部门（不可取消选中状态）
			appId : _config.agentId, // 微应用的Id
			permissionType : "GLOBAL", // 选人权限，目前只有GLOBAL这个参数
			responseUserOnly : false, // 单纯返回人，或者返回人和部门
			onSuccess : function(result) {
				/**
				 * { selectedCount:1, //选择人数
				 * users:[{"name":"","avatar":"","emplId":""}]，//返回选人的列表，列表中的对象包含name（用户名），avatar（用户头像），emplId（用户工号）三个字段
				 * departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数） }
				 */
				cb(result);
			},
			onFail : function(err) {
				cb(err);
			}
		});
	},
	complexPickerPC : function(cb) {
		DingTalkPC.biz.contact.choose({
			multiple : true, // 是否多选： true多选 false单选； 默认true
			users : [], // 默认选中的用户列表，员工userid；成功回调中应包含该信息
			corpId : _config.corpId, // 企业id
			max : 150, // 人数限制，当multiple为true才生效，可选范围1-1500
			onSuccess : function(data) {
				/*
				 * data结构 [{ "name": "张三", //姓名 "avatar":
				 * "http://g.alicdn.com/avatar/zhangsan.png" //头像图片url，可能为空
				 * "emplId": '0573', //员工userid }, ... ]
				 */
				var res = {
					"selectedCount" : data.length,
					"users" : data,
					"departments" : []
				};
				cb(res);
			},
			onFail : function(err) {
				cb(err);
			}
		});
	},
	ding : function(text, cb) {
		dd.biz.ding.post({
			users : [],// 用户列表，工号
			corpId : _config.corpId, // 企业id
			type : 2, // 钉类型 1：image 2：link
			alertType : 2,
			alertDate : {
				"format" : "yyyy-MM-dd HH:mm",
				"value" : "2015-05-09 08:00"
			},
			attachment : {
			// title: 'title',
			// url: 'url',
			// image: 'image',
			// text: ''
			},
			text : text, // 消息
			onSuccess : function() {
				cb('success');
			},
			onFail : function() {
				cb('err');
			}
		});
	},
	chooseDeptPC : function(cb){
		
	},
	chooseDeptClient : function(cb){
		dd.biz.contact.departmentsPicker({
		    title:"选择部门",            //标题
		    corpId: _config.corpId,              //企业的corpId
		    multiple:true,            //是否多选
		    limitTips:"超出了",          //超过限定人数返回提示
		    maxDepartments:1,            //最大选择部门数量
		    pickedDepartments:[],          //已选部门
		    disabledDepartments:[],        //不可选部门
		    requiredDepartments:[],        //必选部门（不可取消选中状态）
		    appId:76669428,              //微应用的Id
		    permissionType:"GLOBAL",          //选人权限，目前只有GLOBAL这个参数
		    onSuccess: function(result) {
		    	cb(result);
		        /**
		        {
		            userCount:1,                              //选择人数
		            departmentsCount:1，//选择的部门数量
		            departments:[{"id":,"name":"","number":}]//返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
		        }
		        */
		    },
		   onFail : function(err) {cb(err);}
		});
	},
	setRight: function(option, cb){
		dd.biz.navigation.setRight({
		    show: option.show,//控制按钮显示， true 显示， false 隐藏， 默认true
		    control: option.control,//是否控制点击事件，true 控制，false 不控制， 默认false
		    text: option.text,//控制显示文本，空字符串表示显示默认文本
		    onSuccess : function(result) {
		        //如果control为true，则onSuccess将在发生按钮点击事件被回调
		        /*
		        {}
		        */
		    	cb(result);
		    },
		    onFail : function(err) {cb(err);}
		});
	}
}

module.exports = dingsdk;