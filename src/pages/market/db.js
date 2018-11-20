// See https://github.com/Jias/natty-fetch for more details.
const context = salt.fetch.context({
    mockUrlPrefix: '/mock/',
    urlPrefix: $("#baseurl_").val(),
    mock: false,
    // jsonp: true,
    withCredentials: false,
    traditional: true,
    data: {
        _tb_token_: '',
        path:''
    },
    method:'POST',
    timeout: 5000,
    fit: function(response) {
        return {
            success: response.success,
            content: response.content,
            error: {
                errorMsg: response.errorMsg,
                errorCode: response.errorCode,
                errorLevel: response.errorLevel
            }
        }
    }
});

context.create('MarketModuleAPI', {
	addDynamic: {
        mockUrl: '',
        url: 'client/dynamic/addDynamic.action'
    },
	searchDynamic: {
	    mockUrl: '',
	    url: 'client/dynamic/searchDynamic.action'
	},
	getDynamic: {
		mockUrl: '',
	    url: 'client/dynamic/getDynamic.action'
	},
	editDynamic: {
		mockUrl: '',
	    url: 'client/dynamic/editDynamic.action'
	},
	delDynamic: {
		mockUrl: '',
	    url: 'client/dynamic/delDynamic.action'
	}
});

module.exports = context.api;
