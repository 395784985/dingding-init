const Actions = require('./actions');
const DB = require('../../db');

const {Api, Util} = require('../../../../common/DongCommon.js');
const {Dingsdk} = Api;
const {User, dateUtil} = Util;

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false,
        form:null,
        
    	userid: User.getUserId(),
    	cycle: '',
    	firmname:'',
    	
    	dynamicDetail:'',
    },

    onFetch: function(params, cb) {
        let t = this;
        t.data.loaded = true;
        t.updateComponent();
        cb && cb(t.data);
    },
    
    onGetDynamic: function(params, cb){
   	 	 let t = this;
	   	 DB.MarketModuleAPI.getDynamic(params).then(function(content){
	   		  t.data.loaded = true;
	   		  console.log('success:' + params + " "+ JSON.stringify(content));
	   		  t.data.form = content.form;
	   		  t.updateData(content.form);
	   	      t.updateComponent();
	   	      cb && cb(t.data);
	   	 }).catch(function(error){
	   		  console.log('error:' + error);
	   		  cb && cb(t.data);
	   	 });
   },
   
   updateData(form){
	   	let t = this;
	   
	   	t.data.cycle = form.cycle;
    	t.data.firmname = form.firmname;
    	
    	t.data.dynamicDetail = form.dynamicDetail;
//    	t.data.cusArray = form.dynamicDetail;
//    	t.data.detailArray = form.dynamicDetail;
	   
//	   	t.data.dynamicDetail = JSON.stringify(form.dynamicDetail);
	   	if(form.dynamicDetail  && form.dynamicDetail != "" && form.dynamicDetail.length > 0){
		   	t.data.cusArray = form.dynamicDetail;
		   	t.data.detailArray = form.dynamicDetail;
	   	}else{
	   		t.data.cusArray =[];
		   	t.data.detailArray = [];
	   	}
    },
    
    onHandleSave: function(params, cb){
	   	 let t = this;
	   	 DB.MarketModuleAPI.editDynamic(params).then(function(content){
	   		  t.data.loaded = true;
	   		  console.log('success:' + content.id);
	   		  t.data.id = content.id;
	   		  t.saveData(content.form);
	   	      t.updateComponent();
	   	      cb && cb(t.data);
	   	 }).catch(function(error){
	   		  console.log('error:' + error);
     		  cb && cb(t.data);
	   	 });
    },
   
    saveData: function(form){
	   	if(form){
	   		console.log("saveData:" + JSON.stringify(form));
	   	}
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
