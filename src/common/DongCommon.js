//所有公共集中引用，为其他模块方便引用
module.exports = {
	Api:{
		Auth:require('./api/auth.js'),
		department:require('./api/department.js'),
		Dingsdk:require('./api/dingsdk.js'),
		env:require('./api/env.js'),
	},
	Util:{
		BrowserUtil : require('./util/browserUtil.js'),
		Cookie : require('./util/cookie.js'),
		DateUtil : require('./util/dateUtil.js'),
		Http : require('./util/http.js'),
		Sign : require('./util/sign.js'),
		User : require('./util/user.js'),
	}
	
}