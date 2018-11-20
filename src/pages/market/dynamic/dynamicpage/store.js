const Actions = require('./actions');
const DB = require('../../db');

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false,
        searchField:'firmname#content#infortype#biztype#inforsource#pubtimestart#pubtimeend',
		forms: [],
        pageSize: 5,
        pageNum: 1,
        nextPage: false,
        firmname:'',
        content:'',
        infortype:'',
        biztype:'',
        inforsource:'',
        pubtimestart:'',
        pubtimeend:'',
    },

    onFetch: function(params, cb) {
        let t = this;
        t.data.loaded = true;
        t.updateComponent();
        cb && cb(t.data);
    },
    onSearchDynamic: function(params, cb){
    	let t = this;
	   	 DB.MarketModuleAPI.searchDynamic(params).then(function(content){
	   		  t.data.loaded = true;
	   		  console.log('success:' + params + " "+ JSON.stringify(content));
	   		  t.data.forms = content.page.result;
	   		  t.data.pageSize = content.page.pageSize;
	   		  t.data.pageNum = content.page.pageNo;
	   		  t.data.nextPage = content.page.nextPage;
	   		  if(content.page.searchMap){
	   			  let searchMap = content.page.searchMap;
	   			  t.data.cycle= searchMap.cycle ? searchMap.cycle:'';
	   			  t.data.firmname= searchMap.firmname ? searchMap.firmname:'';
	   			  t.data.content= searchMap.content ? searchMap.content:'';
	   			  t.data.infortype= searchMap.infortype ? searchMap.infortype:'';
	   			  t.data.biztype= searchMap.biztype ? searchMap.biztype:'';
	   			  t.data.inforsource= searchMap.inforsource ? searchMap.inforsource:'';
	   			  t.data.pubtimestart= searchMap.pubtimestart ? searchMap.pubtimestart:'';
	   			  t.data.pubtimeend= searchMap.pubtimeend ? searchMap.pubtimeend:'';
	   		  }
	   	      t.updateComponent();
	   	      cb && cb(t.data);
	   	 }).catch(function(error){
	   		  console.log('error:' + error);
    		  cb && cb(t.data);
	   	 });
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
