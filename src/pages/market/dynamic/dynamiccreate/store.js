const Actions = require('./actions');
const DB = require('../../db');

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false
    },

    onFetch: function(params, cb) {
        let t = this;
        t.data.loaded = true;
        t.updateComponent();
        cb && cb(t.data);
    },
    
    onHandleSave: function(params, cb){
	   	 let t = this;
	   	 DB.MarketModuleAPI.addDynamic(params).then(function(content){
	   		  t.data.loaded = true;
	   		  console.log('success:' + content.id);
	   		  t.data.id = content.id;
	   		  t.updateData(content.form);
	   	      t.updateComponent();
	   	      cb && cb(t.data);
	   	 }).catch(function(error){
	   		  console.log('error:' + error);
     		  cb && cb(t.data);
	   	 });
    },
   
    updateData: function(form){
	   	if(form){
	   		console.log("updateDate:" + JSON.stringify(form));
	   	}
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
