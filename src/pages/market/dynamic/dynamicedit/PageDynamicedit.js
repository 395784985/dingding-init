require('./PageDynamicedit.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, TextField, TextareaField, RadioField, SelectField, CheckboxField, DatetimeField, Gallery, TabBar, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;

const ComDynamicdetail = require('../../../../components/dynamicdetail');

const {Api, Util} = require('../../../../common/DongCommon.js');
const {Dingsdk} = Api;
const {User, dateUtil} = Util;

class Dynamicedit extends React.Component {

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
    
    handleCheck(data,index,datas){
    	
    	let t = this;
    	console.log(data)
        let result = new Array();
    	 for ( let i in data) {
    		 result.push(data[i].text);
		 }
        console.log(result.join(';'));
        t.state.mPrepare = result.join(';');
    }
    
    dynamicChange(detail){
    	let t = this;
    	console.log("detail[change]: " + JSON.stringify(detail));
    	if(t.state.detailArray.length == 0){
    		t.state.detailArray.push(detail);
    	}else{
    		let flag = false;
    		for (let i = 0; i < t.state.detailArray.length; i++) {
        		let id = t.state.detailArray[i].id;
        		if(id == detail.id){
        			t.state.detailArray[i] = detail;
        			flag = true;
        		}
    		}
    		if(!flag){
    			t.state.detailArray.push(detail);
    		}
    	}
    	
    	console.log("detail: " + t.state.detailArray);
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
   
    handleDelete(detail){
    	let t = this;
    	console.log("detail[delete]: " + JSON.stringify(detail));
    	for (let i = 0; i < t.state.cusArray.length; i++) {
    		let cusd = t.state.cusArray[i];
    		if(cusd.id == detail.id){
    			t.state.cusArray.remove(i);
    		}
		}
    	for (let j = 0; j < t.state.detailArray.length; j++) {
    		let cusd = t.state.detailArray[j].id;
    		if(cusd.id == detail.id){
    			t.state.detailArray.remove(j);
    		}
		}
//    	t.setState({['cusArray']: t.state.cusArray});
    	t.setState({cusArray: t.state.cusArray});
    	t.setState(t.state);
    	console.log("detail: " + JSON.stringify(t.state.detailArray));
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
    
    addItems() {
        this.setState({cusArray: this.state.cusArray.concat(this.item)});
        let item = {id: this.item.id + 1};
        this.item = item;
    }
    
    handleBack(){
    	location.hash = 'dynamicpage';
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
    	 console.log("old----------save..." + t.state.dynamicDetail);
    	 console.log("json---------save..." + JSON.stringify(t.state.dynamicDetail));
    	 Actions.handleSave({
    		formname:"dynamic",
    		id: t.props.params.id,
    		userid: User.getUserId(),
    		cycle: t.state.cycle,
        	firmname: t.state.firmname,
        	dynamicDetail: (t.state.dynamicDetail =="" ? "[]" : JSON.stringify(t.state.dynamicDetail))
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
    	let cusArray = [];
    	if(t.state.cusArray && t.state.cusArray != "" && t.state.cusArray.length > 0){
    		cusArray = t.state.cusArray.map(function(item, index) {
	    	      t.item = {id: t.item.id + 1};
	      	      return <ComDynamicdetail item={item} readonly={false} handleChange={t.dynamicChange.bind(t)} handleDelete={t.handleDelete.bind(t)} />;
	      	});
    	}else{
    		cusArray = [];
    	}
        return (
            <div className="dynamiccreate bg">
	            <div className="notes">
	            </div>
        		<div style={{padding: '5px 15px'}}>
	        		<Group>
			    		<Group.Head>1.企业简称*</Group.Head>
			            <Group.List lineIndent={25}>
		                    <TextField className="g-from" label="调研周期" placeholder="请输入" value={t.state.cycle}
		                       onChange={t.handleChange.bind(t, 'cycle')}/>
		                    <TextField className="g-from" label="企业简称" placeholder="请输入" value={t.state.firmname}
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
    	Dingsdk.setTitle("竞品调研编辑");
    	Dingsdk.setRight({show:false, control: true, text: '更多'});
    	let t = this;
    	this.item = {id: -100};
    	 console.log(t.props.params.id);
    	 Actions.getDynamic({
     		formname: "dynamic",
     		userid: User.getUserId(),
     		id: t.props.params.id,
     	 }, function(data) {
              console.log('getDynamic ok...' + JSON.stringify(data)); 
         });
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

reactMixin.onClass(Dynamicedit, Reflux.connect(Store));

module.exports = Dynamicedit;
