require('./PageDynamicpage.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, Gallery, TabBar, List, DatetimeField, SearchBar, TextField, ScrollList, ItemOne, ItemTwo, RepeatItem, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;

const {Api, Util} = require('../../../../common/DongCommon.js');
const {Dingsdk} = Api;
const {User, dateUtil} = Util;

class Dynamicpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		 loaded: true,
    		 searchField:'firmname#content#infortype#biztype#inforsource#pubtimestart#pubtimeend',
    		 data: [], //[{imgUrl:'',title:'',text:'',date:''}]
    		 searchData: [],
    		 searchVal:'',
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
    
    onLoad(pageNum) { // loadMore为true表示上推加载更多, 为false表示下拉加载更多
    	console.log("...........pageNum:" + pageNum);
        const t = this;
        Actions.searchDynamic({
    		formname:"dynamic",
    		userid: User.getUserId(),
    		pageSize: t.state.pageSize,
            pageNum: pageNum,
            searchField: t.state.searchField,
            firmname: t.state.firmname,
            content: t.state.content,
        	infortype: t.state.infortype,
            biztype: t.state.biztype,
            inforsource: t.state.inforsource,
            pubtimestart: t.state.pubtimestart,
            pubtimeend: t.state.pubtimeend,
            multipeField: false
    	 }, function(data) {
             console.log('merge...' + JSON.stringify(data));
             if (data) {
            	 let pagedata = [];
            	 for (let i = 0; i < data.forms.length; i++) {
            		 let form = data.forms[i];
            		 let htitle = "<div style='line-height:25px;font-size:17px;'><b>企业简称：</b>"+ form.firmname + "</div>";
            		 let title=(<div dangerouslySetInnerHTML={{__html: htitle }} />);
            		 console.log("form.details: " +JSON.stringify(form.details));
            		 let html = "";
            		 if(form.details && form.details.length > 0){
            			 for (var j = 0; j < form.details.length; j++) {
            				 if(j >=3 ){
            					 break;
            				 }
							 var ddetail = form.details[j];
							 let cont = ddetail.content && ddetail.content.length> 35 ? ddetail.content.substring(0, 34)+ "..." : ddetail.content;
							 html += "<div style='line-height:25px;font-size:14px;border-top: 1px dashed #e8e8e8;margin-top:10px;'><p><b>发布内容：</b>"+ cont + "</p><p><b>信息类型：</b>"+ ddetail.infortype + "</p><p><b>所属业务：</b>"+ ddetail.biztype + "</p><p><b>发布时间：</b>" + ddetail.publishtime+"</p></div>";
						 }
            		 }
            		 console.log("form.html: " + html);
            		 let text = (<div dangerouslySetInnerHTML={{__html: html }} />);
            		 
            		 pagedata.push({id: form.id, title: title, text:text});
				 }
            	 t.state.data = pageNum > 1 ? t.state.data.concat(pagedata) : pagedata;
                 t.state.dataGetted = true;
                 t.state.hasError = false;
             } else {
                 t.state.hasError = true;
             }
             t.setState(t.state);
         });
    }
    
    loadMore(){
    	let t = this;
    	t.state.pageNum = t.state.pageNum + 1;
    	t.onLoad(t.state.pageNum);
    }
    
    handleClick(e, dataItem){
    	console.log(dataItem.id);
    	location.hash="dynamicdetail/" + dataItem.id;
    }
    
    onSearch(value){
    	console.log("onSearch..." + value);
        const t = this;
        Actions.searchDynamic({
    		formname:"dynamic",
    		userid: User.getUserId(),
            searchField: t.state.searchField,
        	firmname: value,
        	content: value,
            multipeField: true
    	 }, function(data) {
             console.log('merge...' + JSON.stringify(data));
             if (data) {
            	 let pagedata = [];
            	 for (let i = 0; i < data.forms.length; i++) {
            		 let form = data.forms[i];
            		 let htitle = "<div style='line-height:25px;font-size:17px;'><b>企业简称：</b>"+ form.firmname + "</div>";
            		 let title=(<div dangerouslySetInnerHTML={{__html: htitle }} />);
            		 console.log("form.details: " +JSON.stringify(form.details));
            		 let html = "";
            		 if(form.details && form.details.length > 0){
            			 for (var j = 0; j < form.details.length; j++) {
            				 if(j >=3 ){
            					 break;
            				 }
							 var ddetail = form.details[j];
							 let cont = ddetail.content && ddetail.content.length> 35 ? ddetail.content.substring(0, 34) + "..." : ddetail.content;
							 html += "<div style='line-height:25px;font-size:14px;margin-top:10px;border-top: 1px dashed #e8e8e8;'><p><b>发布内容：</b>"+ cont + "</p><p><b>信息类型：</b>"+ ddetail.infortype + "</p><p><b>所属业务：</b>"+ ddetail.biztype + "</p><p><b>发布时间：</b>" + ddetail.publishtime+"</p></div>";
						 }
            		 }
            		 let text = (<div dangerouslySetInnerHTML={{__html: html }} />);
            		 pagedata.push({id: form.id, title: title, text:text});
				 }
            	 t.state.searchData = t.state.pageNum > 1 ? t.state.searchData.concat(pagedata) : pagedata;
                 t.state.dataGetted = true;
                 t.state.hasError = false;
             } else {
                 t.state.hasError = true;
             }
             t.setState(t.state);
         });
    }
    
    onExit(){
    	console.log("onExit...");
    	let t = this;
    	t.state.pageNum = 1;
    	t.state.content ='';
    	t.state.firmname = '';
    	t.state.content = '';
    	t.state.infortype = '';
    	t.state.biztype = '';
    	t.state.inforsource = '';
    	t.state.pubtimestart='';
    	t.state.pubtimeend='';
    	t.onLoad(1);
    }
    
    searchChange(value, from, e){
    	console.log("searchChange ..."+ value +" : " + from + " : " + e);
    }
    
    handleback(){
    	console.log("handleback...");
    	location.hash = "/";
    }
    
    handleSearch(){
    	console.log("handleSearch...flag:" + this.flag);
    	if(!this.flag || this.flag == undefined){
    		this.flag = true;
    		$("#searchCondition").removeClass("dis-none");
    	}else{
    		this.flag = false;
    		$("#searchCondition").addClass("dis-none");
    	}
    }
    
    importDynamic(){
    	console.log("importDynamic...");
    	location.hash = "dynamiccreate";
    }
    
    exportDynamic(){
    	console.log("exportDynamic...");
    	location.href= $("#baseurl_").val() + "client/dynamic/exportDynamic.action?formname=dynamic&userid=" + User.getUserId();
    }
    
    render() {
    	let t = this;
    	console.log("nextPage: " + t.state.nextPage);
    	if(!t.state.nextPage){
    		$("#loadMore").addClass("dis-none");
    	}else{
    		$("#loadMore").removeClass("dis-none");
    	}
    	
    	if(navigator.userAgent.indexOf('Windows') > -1){
    		$("#return, #exportExel").removeClass("dis-none");
    	}
    	
        return (
            <div className="dynamicpage">
	            <div className="screen-popup t-PF">
				    <div className="screen-popup-text t-PA">
		                <TextField className="g-from" label="企业简称" placeholder="请输入" value={t.state.firmname}
		                    onChange={t.handleChange.bind(t, 'firmname')}/>
		                <TextField className="g-from" label="发布内容" placeholder="请输入" value={t.state.content}
	                    	onChange={t.handleChange.bind(t, 'content')}/>
		                <DatetimeField className="g-from" label="发布时间起始" placeholder="请选择" columns={[ '年', '月', '日' ]}
		                	value={t.state.pubtimestart} onSelect={t.handleChange.bind(t, 'pubtimestart')} />
		                <DatetimeField className="g-from" label="发布时间截止" placeholder="请选择" columns={[ '年', '月', '日' ]}
	                		value={t.state.pubtimeend} onSelect={t.handleChange.bind(t, 'pubtimeend')} />
	                	<TextField className="g-from" label="信息类型" placeholder="请输入" value={t.state.infortype}
                    		onChange={t.handleChange.bind(t, 'infortype')}/>
                    	
                    	<TextField className="g-from" label="所属业务" placeholder="请输入" value={t.state.biztype}
                    		onChange={t.handleChange.bind(t, 'biztype')}/>
		                <TextField className="g-from" label="信息源" placeholder="请输入" value={t.state.inforsource}
                    		onChange={t.handleChange.bind(t, 'inforsource')}/>
		                <div className="t-FAC">
			            	<center><Button type="minor" className="t-W128" onClick={t.restCondition.bind(t)}>重置</Button></center>
		                </div>
	                </div>
					<div className="screen-popup-bottom t-H44 t-PA">
		            	<div className="dp-fx">
			            	<div className="btn-20"><Button type="secondary" onClick={t.screenNone.bind(t)}>取消</Button></div>
		            		<div className="btn-20"><Button type="primary" onClick={t.searchCondtion.bind(t)}>确定</Button></div>
		                </div>
					</div>
				</div>
            
            	<div style={{padding: '5px 10px'}}>
	            	<div style={{padding: '5px 0px'}}>
				        <div className="demo-cell dp-fx"> 
				        	<div id="return" className="t-FB1 t-PR8 dis-none"><Button type="minor" size="medium" onClick={t.handleback.bind(t)}>返回</Button></div>
			        		<div className="btn-20"><Button type="minor" onClick={t.importDynamic.bind(t)}>新增</Button></div>
			        		<div className="t-FB1 t-PR8" onClick={t.screenBlock.bind(t)}><Button type="minor" size="medium">筛选</Button></div>
			        		<div id="exportExel" className="btn-20 dis-none"><Button type="minor" onClick={t.exportDynamic.bind(t)}>导出</Button></div>
			            </div>
		            </div>
	            </div>
	            <div>{/* className="t-FBH" */}
	            		<SearchBar className="customClass" onSearch={t.onSearch.bind(t)} onExit={t.onExit.bind(t)} placeholder='企业简称、发布内容'>
	            		    <div className="scroll-auto">
            					 {t.state.searchData && t.state.searchData.length > 0 ? (<List layout="left" hasRightIcon={true} onClick={t.handleClick.bind(t)} data={t.state.searchData}/>) : ''}
        					</div>
	            		</SearchBar>
	            		<div className="t-FB1 t-PL8 dis-none"><span style={{width:'80%'}} className="t-LH44 t-FAC" >筛选</span></div>
    			</div>
        	    <div className="scrollpage scroll-auto">
					{t.state.data && t.state.data.length > 0 ?(<List layout="left" hasRightIcon={true} onClick={t.handleClick.bind(t)} data={t.state.data}/>):'' }
					<div id="loadMore" className="loadMore dis-none" onClick={t.loadMore.bind(t)}>点击加载更多...</div>
				</div>
				<div style={{padding: '5px 15px'}}>
				</div>
            </div>
        );
    }
				
	screenBlock(){
		$(".screen-popup").css("display","block");
	}
	
    screenNone(){
		$(".screen-popup").css("display","none");
	}
    
    searchCondtion(){
    	let t = this;
    	t.screenNone();
    	t.onLoad(1);
    }
    
    restCondition(){
    	let t = this;
    	t.state.content ='';
    	t.state.firmname = '';
    	t.state.content = '';
    	t.state.infortype = '';
    	t.state.biztype = '';
    	t.state.inforsource = '';
    	t.state.pubtimestart='';
    	t.state.pubtimeend='';
    	t.setState(t.state);
    }

    componentWillMount() {
    	Dingsdk.setTitle("竞品调研列表");
    	Dingsdk.setRight({show:false, control: true, text: '更多'});
    }

    componentDidMount() {
    	window.scrollTo(0, 0);
    	let t = this;
    	t.state.content ='';
    	t.state.firmname = '';
    	t.state.content = '';
    	t.state.infortype = '';
    	t.state.biztype = '';
    	t.state.inforsource = '';
    	t.state.pubtimestart='';
    	t.state.pubtimeend='';
    	t.onLoad(1);
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

reactMixin.onClass(Dynamicpage, Reflux.connect(Store));

module.exports = Dynamicpage;
