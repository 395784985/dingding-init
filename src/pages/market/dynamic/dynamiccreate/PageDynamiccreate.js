require('./PageDynamiccreate.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, TextField, TextareaField, RadioField, SelectField, CheckboxField, DatetimeField, Gallery, TabBar, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;

const ComDynamicdetail = require('../../../../components/dynamicdetail');
const {Api, Util} = require('../../../../common/DongCommon.js');
const {Dingsdk} = Api;
const {User, dateUtil} = Util;

class PageDynamiccreate extends React.Component {

   constructor(props) {
        super(props);
        let cusArray = [];
        this.state = {
    		loaded: false,
        	id: 0,
        	userid: User.getUserId(),
        	cycle: '',
        	firmname:'',
        	
        	cusArray:cusArray,
        	detailArray:[]
        };
    }
    
    handleChange(label, value){
       let t = this;
	   t.setState({
	       [label]: value
	   }, () => {
	       let disabled = false;
	       for (let key in t.state) {
	       	   if(key == label){
	       		    console.log(t.state[key]);
	       	   }
	       }
	   });
    }
    
    dynamicChange(detail){
    	let t = this;
    	console.log("detail[change]: " + JSON.stringify(detail));
    	if(t.state.detailArray.length == 0){
    		t.state.detailArray.push(detail);
    	}else{
    		let flag = false;
    		for (let i = 0; i < t.state.detailArray.length; i++) {
    			let cusd  = t.state.detailArray[i];
        		if(cusd.id == detail.id){
        			t.state.detailArray[i] = detail;
        			flag = true;
        		}
    		}
    		if(!flag){
    			t.state.detailArray.push(detail);
    		}
    	}
    	
    	console.log("detail: " + JSON.stringify(t.state.detailArray));
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
   
    handleDelete(detail){
    	let t = this;
    	console.log("detail[delete]: " + JSON.stringify(detail));
    	for (let i = 0; i < t.state.cusArray.length; i++) {
    		let cusd  = t.state.cusArray[i];
    		if(cusd.id == detail.id){
    			t.state.cusArray.remove(i);
    		}
		}
    	for (let j = 0; j < t.state.detailArray.length; j++) {
    		let cusd = t.state.detailArray[j];
    		if(cusd.id == detail.id){
    			t.state.detailArray.remove(j);
    		}
		}
    	console.log("detail: " + JSON.stringify(t.state.detailArray));
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
    
    addItems() {
        this.setState({cusArray: this.state.cusArray.concat(this.item)});
        let item = {id: this.item.id + 1};
        this.item = item;
    }
    
    handleBack(){
    	location.hash = '/dynamicpage';
    }
    handleSave(){
    	 let t = this;
    	 for (let key in this.state) {
    		 let val = this.state[key];
    		 if((key == 'cycle') && (val == '' || val.length > 50)){
    			 Toast.show({
                     type: 'error',
                     content: '调研周期不能为空！',
                     onHide: function () {
                     }
                 });
    			 return;
    		 }
    		 if((key == 'firmname') && (val == '' || val.length > 50)){
    			 Toast.show({
                     type: 'error',
                     content: '企业名称不能为空！',
                     onHide: function () {
                     }
                 });
    			 return;
    		 }
    	 }
    	 
    	
    	 Actions.handleSave({
    		formname:"dynamic",
    		userid: User.getUserId(),
    		cycle: t.state.cycle,
        	firmname: t.state.firmname,
        	dynamicDetail:t.state.dynamicDetail
    	 }, function(data) {
             console.log('merge...' + JSON.stringify(data));
             var contxt = "保存成功！";
	         Toast.show({
	        	  type: 'success',
	        	  content: contxt,
	        	  duration: 1500,
	        	  onDidHide() {
	        	      console.log('success tip is hidden');
                      location.hash = '/dynamicpage';
	        	  }
        	 });
             
         });
    }
    
    selectContact(key){
   	 	let t = this;
		Dingsdk.chooseEmpId(null, function(data){
	     	if(data.length > 0){
	     		var emplIds = new Array();
		     	var emplNames = new Array();
		     	for ( var i in data) {
					emplIds.push(data[i].emplId);
					emplNames.push(data[i].name);
				}
	     	    t.setState({
	     	    	[key]: emplNames.join(',')
                });
		     	console.log(t.state.userName);
	     	}
	    });
   }
   

    render() {
    	let t = this;
    	var cusArray = t.state.cusArray.map(function(item, index) {
    	      return <ComDynamicdetail item={item} readonly={false} handleChange={t.dynamicChange.bind(t)} handleDelete={t.handleDelete.bind(t)} />;
    	});
        return (
            <div className="dynamiccreate bg">
	            <div className="notes">
	            </div>
        		<div style={{padding: '5px 15px'}}>
			    	<Group>
			    		<Group.Head>1.企业简称*</Group.Head>
			            <Group.List lineIndent={25}>
	                        <TextField className="g-from" label="调研周期" placeholder="请输入" value={t.state.cycle} required={true}
	                           onChange={t.handleChange.bind(t, 'cycle')}/>
	                        <TextField className="g-from" label="企业简称" placeholder="请输入" value={t.state.firmname} required={true}
	                           onChange={t.handleChange.bind(t, 'firmname')}/>
                        </Group.List>
			    	</Group>
		    	</div>
		    	<div style={{padding: '2px 15px'}} id="dynamicDetail">
			    	<Group>
		            	<Group.Head>2.动态明细*</Group.Head>
		            	{
		            		cusArray
		            	}
			    	</Group>
			    	<div className="addbtn" onClick={t.addItems.bind(t)}>添加动态</div>
		    	</div>
		    	
		        <div style={{padding: '30px 15px'}}>
		            <div className="demo-row">
		            	<div className="demo-cell dp-fx"> 
		            		<div className="btn-20"><Button type="secondary" onClick={t.handleBack.bind(t)}>取消</Button></div>
		            		<div className="btn-20"><Button  type="primary" onClick={t.handleSave.bind(t)}>保存</Button></div>
		                </div>
		            </div>
		        </div>
            </div>
        );
    }

    componentWillMount() {
    	Dingsdk.setTitle("竞品调研录入");
    	Dingsdk.setRight({show:false, control: true, text: '更多'});
    	let t = this;
    	this.item = {id:1};
    }

    componentDidMount() {
    	Array.prototype.remove = function (dx) {  
    	    if (isNaN(dx) || dx > this.length) {  
    	        return false;  
    	    }  
    	    for (var i = 0, n = 0; i < this.length; i++) {  
    	        if (this[i] != this[dx]) {  
    	            this[n++] = this[i];  
    	        }  
    	    }  
    	    this.length -= 1;  
    	}; 
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(PageDynamiccreate, Reflux.connect(Store));

module.exports = PageDynamiccreate;
