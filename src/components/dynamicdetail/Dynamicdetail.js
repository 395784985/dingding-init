require('./Dynamicdetail.styl');

const { Grid, TextField, TextareaField, RadioField, SelectField, CheckboxField, DatetimeField, Gallery, TabBar, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;

const {Dingsdk} = require('../../common/DongCommon.js').Api;

class Customerdetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	id:1,
        	content:'',
        	link:'',
        	publishtime:'',
        	infortype:'',
        	biztype:'',
        	inforsource:'',
        	remark:'',
    		readonly:false
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
	       		   
	       		   console.log(t.state[key] + ":" + label + "-" + value);
	       		   console.log("dynamicDetail" + JSON.stringify(t.state));
	       		   
	       		   if(key == "content" && value.length > 450){
	       			   value = value.substring(0, 450) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "发布内容最长500，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		   
	       		  if(key == "link" && value.length > 450){
	       			   value = value.substring(0, 450) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "内容链接最长500，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		  
	       		  if(key == "infortype" && value.length > 45){
	       			   value = value.substring(0, 45) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "信息类型最长50，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		  if(key == "biztype" && value.length > 45){
	       			   value = value.substring(0, 45) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "所属业务最长50，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		  if(key == "inforsource" && value.length > 45){
	       			   value = value.substring(0, 45) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "信息源最长50，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		   if(key == "remark" && value.length > 450){
	       			   value = value.substring(0, 450) + "...";
	       			   Toast.show({
		  	        	  type: 'error',
		  	        	  content: "备注最长500，请重新输入！",
		  	        	  duration: 1500,
		  	        	  onDidHide() {
		  	        	      console.log('success tip is hidden');
		  	        	      detail[key] = value;
		  	        	      t.setState({[key]: value});
		  	        	      return;
		  	        	  }
		          	   });
	       		   }
	       		  
	       		   detail[key] = value;
	       		   this.props.handleChange(detail);
	       	   }
	       }
	   });
	   var detail = {
			   id: t.props.item.id?t.props.item.id:1,
			   content:t.state.content,
	           link:t.state.link,
	           publishtime:t.state.publishtime,
	           infortype:t.state.infortype,
	           biztype:t.state.biztype,
	           inforsource:t.state.inforsource,
	           remark:t.state.remark,
		   };
//	   console.log("customerDetail : " + JSON.stringify(t.state));
//	   this.props.handleChange(detail);
    }
    
    handleDelete(){
    	 let t = this;
         var detail = {
			   id:t.props.item.id?t.props.item.id:1,
			   content:t.state.content,
		       link:t.state.link,
		       publishtime:t.state.publishtime,
		       infortype:t.state.infortype,
		       biztype:t.state.biztype,
		       inforsource:t.state.inforsource,
		       remark:t.state.remark,
         };
         Dingsdk.confirm("确定删除吗？", function(result){
        	  if(result && result.buttonIndex == 0){
        		  t.props.handleDelete(detail);
        	  }
         });
//         t.props.handleDelete(detail);
    }

    render() {
    	let t = this;
    	console.log("readonly:" + t.props.readonly);
    	t.state.id = t.props.item.id?t.props.item.id:1;
        return (
            <div className="customerdetail">
            	{t.props.readonly ? '' : (<div id="delbtn" className="btn-del"> <span onClick={t.handleDelete.bind(t)}>↙删除</span></div>)}
            	<Group.List lineIndent={25}>
	            <TextareaField minRows={2} maxRows={5} className="g-from" label="发布内容" placeholder="发布内容文字最长500，请输入" readOnly={t.props.readonly} value={t.state.content}
	        		onChange={t.handleChange.bind(t, 'content')}/>
	            {t.props.readonly ? (<a href={t.state.link} ><TextField className="g-from a-link" label="内容链接" placeholder="请输入" readOnly={t.props.readonly} value={t.state.link}
	        	onChange={t.handleChange.bind(t, 'link')}/></a>) : (<TextField className="g-from" label="内容链接" placeholder="请输入" readOnly={t.props.readonly} value={t.state.link}
	        	onChange={t.handleChange.bind(t, 'link')}/>)}
	            <DatetimeField className="g-from" label="发布时间" placeholder="请选择" readOnly={t.props.readonly}  value={t.state.publishtime} onSelect={t.handleChange.bind(t, 'publishtime')} />
	            <TextField className="g-from" label="信息类型" placeholder="请输入" readOnly={t.props.readonly} value={t.state.infortype}
		        	onChange={t.handleChange.bind(t, 'infortype')}/>
	        
	            <TextField className="g-from" label="所属业务" placeholder="请输入" readOnly={t.props.readonly} value={t.state.biztype}
	        		onChange={t.handleChange.bind(t, 'biztype')}/>
	            <TextField className="g-from" label="信息源" placeholder="请输入" readOnly={t.props.readonly} value={t.state.inforsource}
	        		onChange={t.handleChange.bind(t, 'inforsource')}/>
	            <TextareaField minRows={2} maxRows={5} className="g-from" label="备注" placeholder="请输入" readOnly={t.props.readonly} value={t.state.remark}
	        		onChange={t.handleChange.bind(t, 'remark')}/>
	            </Group.List>
	            <br />
	        </div>
        );
    }

    componentWillMount() {
    	let t = this;
    	console.log("t.state.content-----------componentWillMount------------:"  + t.props.time + " "+ t.props.item.content);
    	t.state.id = t.props.item.id?t.props.item.id:1;
    	t.state.content = (t.props.item.content && t.props.item.content!="") ? t.props.item.content:'',
    	t.state.link = (t.props.item.link && t.props.item.link !="") ? t.props.item.link : '',
    	t.state.publishtime = (t.props.item.publishtime && t.props.item.publishtime !=0) ? t.props.item.publishtime: '',
    	t.state.infortype = (t.props.item.infortype && t.props.item.infortype !="") ? t.props.item.infortype : '',
    	t.state.biztype = (t.props.item.biztype && t.props.item.biztype != "") ? t.props.item.biztype: '',
    	t.state.inforsource = (t.props.item.inforsource && t.props.item.inforsource != "") ? t.props.item.inforsource : '',
    	t.state.remark = (t.props.item.remark && t.props.item.remark != "") ? t.props.item.remark: '',
    	t.state.readonly = t.props.readonly ? t.props.readonly : true;
    	
        t.setState(t.state);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    	let t = this;
    	console.log("t.state.content---------componentWillReceiveProps--------------:"  + nextProps.time + " "+ nextProps.item.content);	
    	t.state.id = nextProps.item.id?nextProps.item.id:1;
    	t.state.content = (nextProps.item.content && nextProps.item.content!="") ? nextProps.item.content:'',
    	t.state.link = (nextProps.item.link && nextProps.item.link !="") ? nextProps.item.link : '',
    	t.state.publishtime = (nextProps.item.publishtime && nextProps.item.publishtime !=0) ? nextProps.item.publishtime: '',
    	t.state.infortype = (nextProps.item.infortype && nextProps.item.infortype !="") ? nextProps.item.infortype : '',
    	t.state.biztype = (nextProps.item.biztype && nextProps.item.biztype != "") ? nextProps.item.biztype: '',
    	t.state.inforsource = (nextProps.item.inforsource && nextProps.item.inforsource != "") ? nextProps.item.inforsource : '',
    	t.state.remark = (nextProps.item.remark && nextProps.item.remark != "") ? nextProps.item.remark: '',
    	t.state.readonly = nextProps.readonly ? nextProps.readonly : true;
        t.setState(t.state);
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

module.exports = Customerdetail;
