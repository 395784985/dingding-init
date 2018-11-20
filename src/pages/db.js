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

context.create('ReportModuleAPI', {
    showDayList: {
        mockUrl: '',
        url: 'client/report/showDayList.action'
    },
    showMonthList: {
        mockUrl: '',
        url: 'client/report/showMonthList.action'
    },
    showWeekList: {
        mockUrl: '',
        url: 'client/report/showWeekList.action'
    }
});

module.exports = context.api;
