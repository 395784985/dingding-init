const Actions = require('./actions');
const DB = require('./db');
const {CookieUtil} = require('../common/DongCommon.js');

//const agentId = 81166339;  
let _config = {agentId:81536577,corpId: 'ding1e0042940cd8a285'};
module.exports = Reflux.createStore({
    //监听所有的actions
    listenables: [Actions],
    //匹配this.state 数据
    data: {
    	loaded: false,
    	change: 0
    },
    //on开头的都是action触发后的回调函数
    onLogin: function(cb) {
    	let t = this;
    	console.log("login.config...")
		//免登
		if(navigator.userAgent.indexOf('Windows') > -1){
			t.configPC(cb);
		}else{
			t.configClient(cb);
		}
    },
	configPC: function(cb){
		let t = this;
		console.log('configPC...');
		var params = {"path":"admin.html"};
		t.data.change = 1;
		t.updateComponent();
		DB.NoLoginAPI.getNoLoginParams(params).then(function(content) {
			console.log("env ... " + JSON.stringify(content));
			t.data.change = 2;
			t.updateComponent();
//		    if(content && content._config){
//		    	_config.agentId = content._config.agentId;
		    	_config.corpId = content._config.corpId;
		    	_config.timeStamp = content._config.timeStamp;
		    	_config.nonceStr = content._config.nonceStr;
		    	_config.signature = content._config.signature;
		    	
		    	DingTalkPC.config({
//		    		agentId : _config.agentId,
		    		agentId: _config.agentId,
		    		corpId : _config.corpId,
					timeStamp : _config.timeStamp,
					nonceStr : _config.nonceStr,
					signature : _config.signature,
		    	    jsApiList: ['device.notification.alert', 'device.notification.confirm','biz.contact.choose'] // 必填，需要使用的jsapi列表
		    	});
				
		    	DingTalkPC.ready(function(res){
					console.log('dd ready success...');
					t.data.change = 3;
					t.updateComponent();
					t.authCodePC(cb);
				});

		    	DingTalkPC.error(function(error){
		    		console.log('dd error: ' + JSON.stringify(err));
				});

//		    }
		}).catch(function(error) {
		    console.log("error ... " + error);
		});
		t.data.change = 7;
		t.updateComponent();
	},
	authCodePC:function(cb){
		let t = this;
		var userid = CookieUtil.getCookie("userid");
		var userstr = "";
		if(!userid || userid.length == 0){
			userstr += "userid 不存在！开始获取...";
			DingTalkPC.runtime.permission.requestAuthCode({
				corpId : _config.corpId,
				onSuccess : function(info) {
					console.log('authcode: ' + info.code);
					CookieUtil.setCookie("authcode", info.code, 7);
					t.data.change = 4;
					t.updateComponent();
					t.userinfo(cb, info);
		            cb && cb(t.data);
				},
				onFail : function(err) {
					console.log('fail4: ' + JSON.stringify(err));
					t.updateComponent();
		            cb && cb(t.data);
				}
			});
		}else{
			userstr += "userid 已存在！不用获取...";
		}
		console.log(userstr);
	},
	configClient: function(cb){
		let t = this;
		
		console.log('configClient...');
		var params = {"path":"admin.html?dd_progress=false"};
		console.log(1);
		t.data.change = 1;
		t.updateComponent();
		
		DB.NoLoginAPI.getNoLoginParams(params).then(function(content) {
			console.log(2);
			console.log("env ... " + JSON.stringify(content));
			t.data.change = 2;
			t.updateComponent();
			
//		    if(content && content._config){
//		    	_config.agentId = content._config.agentId;
		    	_config.corpId = content._config.corpId;
		    	_config.timeStamp = content._config.timeStamp;
		    	_config.nonceStr = content._config.nonceStr;
		    	_config.signature = content._config.signature;
		    	dd.config({
//					agentId : _config.agentId,
		    		agentId: _config.agentId,
					corpId : _config.corpId,
					timeStamp : _config.timeStamp,
					nonceStr : _config.nonceStr,
					signature : _config.signature,
					jsApiList :[ 'runtime.info', 'biz.contact.choose','biz.contact.complexPicker',
					'device.notification.confirm', 'device.notification.alert',
					'device.notification.prompt', 'biz.ding.post',
					'biz.util.openLink' ]
				});
//		    }
		    dd.ready(function() {
		    	console.log('dd ready success...');
		    	t.data.change = 3;
		    	t.updateComponent();
				t.authCodeClient(cb);
			});
			dd.error(function(err) {
				console.log('dd error: ' + JSON.stringify(err));
				t.updateComponent();
			});
			
            cb && cb(t.data);
		}).catch(function(error) {
			console.log("error ... " + JSON.stringify(error));
            cb && cb(t.data);
		});
		t.data.change = 7;
		t.updateComponent();
	},
	authCodeClient:function(cb){
		let t = this;
		var userstr = "";
		var userid = CookieUtil.getCookie("userid");
		if(userid == null || userid == undefined || userid.length == 0){
			userstr += "userid 不存在！开始获取...";
			dd.runtime.permission.requestAuthCode({
				corpId : _config.corpId,
				onSuccess : function(info) {
					console.log('authcode: ' + info.code);
					CookieUtil.setCookie("authcode", info.code, 7);
					t.data.change = 4;
					t.updateComponent();
					t.userinfo(cb, info);
				},
				onFail : function(err) {
					console.log('fail: ' + JSON.stringify(err));
				}
			});
		}else{
			userstr += "userid 已存在！不用获取...";
		}
		console.log( userstr + "getCookie userid: " + userid);
	},
	userinfo: function(cb, info){
		let t = this;
		var params = {code : info.code};
		t.data.change = 5;
		t.updateComponent();
		DB.NoLoginAPI.getUserInfo(params).then(function(content) {
			console.log(JSON.stringify(content.userdyd));
			if(content.userdyd){
				CookieUtil.setCookie("userid", content.userdyd.desuid, 7);
				CookieUtil.setCookie("userName", content.userdyd.rname, 7);
				CookieUtil.setCookie("deptid", content.userdyd.desdeptid, 7);
				t.data.change = 6;
				t.updateComponent();
	            cb && cb(t.data);
			}
		}).catch(function(error) {
			console.log("error ... " + error);
			t.updateComponent();
            cb && cb(t.data);
		});
	},
    //更新-自带
    updateComponent: function() {
        this.trigger(this.data);
    },

    //初始化-自带
    getInitialState: function() {
        console.log("store.getInitialState");
        return this.data;
    }
});
