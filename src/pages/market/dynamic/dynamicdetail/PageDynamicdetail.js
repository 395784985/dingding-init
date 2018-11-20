require('./PageDynamicdetail.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, TextField, TextareaField, RadioField, SelectField, CheckboxField, DatetimeField, Gallery, TabBar, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;

const ComDynamicdetail = require('../../../../components/dynamicdetail');

const {Api, Util} = require('../../../../common/DongCommon.js');
const {Dingsdk} = Api;
const {User, dateUtil} = Util;

class Dynamicdetail extends React.Component {

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
        	detailArray:[],
        	btndisabled:true,
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
    	
    	console.log("detail: " + JSON.stringify(t.state.detailArray));
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
   
    handleDelete(detail){
    	let t = this;
    	console.log("detail[delete]: " + JSON.stringify(detail));
    	for (let i = 0; i < t.state.cusArray.length; i++) {
    		let id = t.state.cusArray[i];
    		if(id == detail.id){
    			t.state.cusArray.remove(i);
    		}
		}
    	for (let j = 0; j < t.state.detailArray.length; j++) {
    		let id = t.state.detailArray[j].id;
    		if(id == detail.id){
    			t.state.detailArray.remove(j);
    		}
		}
    	console.log("detail: " + JSON.stringify(t.state.detailArray));
    	t.setState({['dynamicDetail']: JSON.stringify(t.state.detailArray)});
    }
    
    addItems() {
        this.setState({cusArray: this.state.cusArray.concat(this.id)});
        this.id = this.id + 1;
    }
    
    handleBack(){
    	location.hash = '/dynamicpage';
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
    				console.log("cusArray:" + item.id + " item !!!!!!!!!!!!!!!!!! content:" + item.content);
	      	      return <ComDynamicdetail time={new Date().getTime()} item={item} readonly={true} handleChange={t.dynamicChange.bind(t)} handleDelete={t.handleDelete.bind(t)} />;
	      	});
    	}else{
    		cusArray = [];
    	}
    	
    	if(navigator.userAgent.indexOf('Windows') > -1){
    		$("#return").removeClass("dis-none");
    	}
    
        return (
            <div className="visitorregdetail">
            	<div style={{padding: '10px 5px'}}>
	            	<div className="demo-row">
		            	<div className="demo-cell dp-fx"> 
		            		<div id="return" className="btn-20 dis-none"><Button type="minor" onClick={t.handleBack.bind(t)}>返回</Button></div>
		            		<div className="btn-20"><Button type="minor" onClick={t.handleToEdit.bind(t)} disabled = {t.state.btndisabled}>编辑</Button></div>
		            		<div className="btn-20"><Button  type="danger" onClick={t.handleDel.bind(t)} disabled = {t.state.btndisabled}>删除</Button></div>
		                </div>
		            </div>
		        </div>
		    	<div style={{padding: '2px 15px'}}>
			    	<Group>
			    		<Group.Head>1.企业简称*</Group.Head>
			            <Group.List lineIndent={25}>
		                    <TextField className="g-from" label="调研周期" placeholder="请输入" value={t.state.cycle} required={true} readOnly={true}
		                       onChange={t.handleChange.bind(t, 'cycle')}/>
		                    <TextField className="g-from" label="企业简称" placeholder="请输入" value={t.state.firmname} required={true} readOnly={true}
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
			    	<div className="addbtn dis-none" onClick={t.addItems.bind(t)}>添加动态</div>
		    	</div>
            </div>
        );
    }
		    	
    handleToEdit(){
    	let t = this;
    	console.log("dynamicedit:" + t.props.params.id);
    	if(User.getUserId() != t.state.desUserid){
    		Dingsdk.alert("提示", "只能编辑自己的信息！");
    		return;
    	}
    	location.hash = "dynamicedit/" +　t.props.params.id;
    }
    
    handleEdit(){
   	 	let t = this;
   	 	Actions.editDynamic({
    		formname: "visitor",
    		userid: User.getUserId(),
    		id: t.props.params.id,
	    }, function(data) {
             console.log('delDynamic ok...' + JSON.stringify(data));
        });
   }
    
   handleDel(){
	   let t = this;
	   if(User.getUserId() != t.state.desUserid){
	   		Dingsdk.alert("提示", "只能删除自己的信息！");
	   		return;
	   }
	   Dingsdk.confirm("确定删除吗？", function(result){
     	  if(result && result.buttonIndex == 0){
     		 Actions.delDynamic({
          		formname: "dynamic",
          		userid: User.getUserId(),
          		id: t.props.params.id,
          	 }, function(data) {
                 console.log('delDynamic ok...' + JSON.stringify(data));
                 location.hash="/dynamicpage";
             });
     	  }
      });
	   
	   Actions.delDynamic({
     		formname: "dynamic",
     		userid: User.getUserId(),
     		id: t.props.params.id,
     	 }, function(data) {
            console.log('delDynamic ok...' + JSON.stringify(data));
            location.hash="/dynamicpage";
        });
    }

    componentWillMount() {
    	 let t = this;
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
    	Dingsdk.setTitle("竞品调研详情");
    	Dingsdk.setRight({show:false, control: true, text: '更多'});
    	window.scrollTo(0, 0);
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

reactMixin.onClass(Dynamicdetail, Reflux.connect(Store));

module.exports = Dynamicdetail;
