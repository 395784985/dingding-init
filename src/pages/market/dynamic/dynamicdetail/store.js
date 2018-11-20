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
    	btndisabled:true,
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
    	t.data.cusArray = form.dynamicDetail;
    	t.data.detailArray = form.dynamicDetail;
    	
    	t.data.desUserid = form.desUserid;
    	if(User.getUserId() != form.desUserid){
    		t.data.btndisabled = true;
   	 	}else{
   	 		t.data.btndisabled = false;
   	 	}
    },
    
    onDelDynamic: function(params, cb){
   	 let t = this;
	   	 DB.MarketModuleAPI.delDynamic(params).then(function(content){
	   		  t.data.loaded = true;
	   		  console.log('success:' + params + " "+ JSON.stringify(content));
	   	      t.updateComponent();
	   	      cb && cb(t.data);
	   	 }).catch(function(error){
	   		  console.log('error:' + error);
	   		  cb && cb(t.data);
	   	 });
    },
    
    onEditDynamic: function(params, cb){
      	 let t = this;
   	   	 DB.MarketModuleAPI.editDynamic(params).then(function(content){
   	   		  t.data.loaded = true;
   	   		  console.log('success:' + params + " "+ JSON.stringify(content));
   	   		  t.data.form = content.form;
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
