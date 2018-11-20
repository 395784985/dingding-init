require('./Chatitem.styl');
const { Group, Avatar} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;
class Chatitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	oneself:false,
        	time:'',
        	avasrc:'',
        	realname:'',
        	nickname:'',
        	msgtype:'',//text:文本，pic:图片，audio:音频，video:视频，location:位置
        	content:'', //文本，图片地址，音频地址，视频地址。经纬度
        };
    }

    render() {
    	let t = this;
    	
    	
    	
        return (
            <div className="chatitem">
	            	{
	            		!t.state.oneself ? (
            				<HBox hAlign={!t.state.oneself ? "start" : "end"} className="moment-wp">
	            				<Box className="moment-left t-P8">
		    		        		<Avatar src={t.state.avasrc} width={80} height={80} />
		    		        	</Box>
		    		        	<Box className="moment-right">
		    		            	<VBox hAlign={!t.state.oneself ? "start" : "end"} className="moment-wp t-PT6 t-PB6 t-PR6">
		    			            	<Box className="moment-name t-LH25">
		    			            		{t.state.realname + (t.state.nickname ? "(" + t.state.nickname + ")":"")}
		    			            	</Box>
		    			            	<Box className="moment-content t-LH18 t-PL8 tPR8">
		    			            		{t.state.msgtype && t.state.msgtype == "text"? t.state.content:""}
		    			            	</Box>
		    			            	<Box className="moment-img">
		    			            		{t.state.msgtype && t.state.msgtype == "pic"? (
		    			            				<img className="t-PT2 t-PR4" src={t.state.content} width={180} height={180} />
		    			            				):""
		    			            		}
		    			            		</Box>
		    			            </VBox>
		    		        	</Box>
	    		        	</HBox>
	            		):(
            				<HBox hAlign={!t.state.oneself ? "start" : "end"} className="moment-wp">
	            				<Box className="moment-right">
		    		            	<VBox hAlign={!t.state.oneself ? "start" : "end"} className="moment-wp t-PT6 t-PB6 t-PR6">
		    			            	<Box className="moment-name t-LH25">
		    			            		{t.state.realname + (t.state.nickname ? "(" + t.state.nickname + ")":"")}
		    			            	</Box>
		    			            	<Box className="moment-content t-LH18 t-PL8 tPR8 t-PB8">
		    			            		{t.state.msgtype && t.state.msgtype == "text"? t.state.content:""}
		    			            	</Box>
		    			            	<Box className="moment-img">
		    			            		{t.state.msgtype && t.state.msgtype == "pic"? (
		    			            				<img className="t-PT2 t-PR4" src={t.state.content} width={180} height={180} />
	    			            				):""
		    			            		}
		    			            		</Box>
		    			            </VBox>
		    		        	</Box>
	            				<Box className="moment-left t-P8">
		    		        		<Avatar src={t.state.avasrc} width={80} height={80} />
		    		        	</Box>
	    		        	</HBox>
	            		)
	            	}
		        
		        {/*
		        <HBox hAlign="start" className="moment-wp">
		        	<Box className="moment-left t-P8">
		        		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		        	</Box>
		        	<Box className="moment-right">
		            	<VBox hAlign="start" className="moment-wp t-PT6 t-PB6 t-PR6">
			            	<Box className="moment-name t-LH25">
			            		马化腾
			            	</Box>
			            	<Box className="moment-content t-LH18 t-PB4">
			            		马兄，出来喝酒啊？
			            	</Box>
			            	<Box className="moment-img"></Box>
			            </VBox>
		        	</Box>
		        </HBox>
		        
		        <HBox hAlign="end" className="moment-wp">
		        	<Box className="moment-left">
			        	<VBox hAlign="end" className="moment-wp t-PT6 t-PB6 t-PR6">
			            	<Box className="moment-name t-LH25">
			            		马云
			            	</Box>
			            	<Box className="moment-content t-LH18 t-PB4">
			            		不，我在淘宝买东西。
			            	</Box>
			            </VBox>
		        	</Box>
		        	<Box className="moment-right t-P8">
		        		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		        	</Box>
		        </HBox>
		        <HBox hAlign="end" className="moment-wp">
		        	<Box className="moment-left">
			        	<VBox hAlign="end" className="moment-wp t-PT6 t-PB6 t-PR6">
			            	<Box className="moment-name t-LH25">
			            		赵旭东
			            	</Box>
			            	<Box className="moment-content t-LH18 t-PB4">
			            	</Box>
			            	<Box className="moment-img">
			            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={140} height={180} />
				            </Box>
			            </VBox>
		        	</Box>
		        	<Box className="moment-right t-P8">
		        		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		        	</Box>
		        </HBox>
		        *
		        */}
		        
		        
            </div>
        );
    }

    componentWillMount() {
    	let t = this;
    	t.state.oneself = t.props.item.oneself;
    	t.state.time = t.props.item.time;
    	t.state.avasrc = t.props.item.avasrc;
    	t.state.realname = t.props.item.realname;
    	t.state.nickname = t.props.item.nickname;
    	t.state.msgtype = t.props.item.msgtype;
    	t.state.content = t.props.item.content;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    	
    	let t = this;
    	if(t.state.oneself !== nextProps.item.oneself){
    		return true;
    	}
    	if(t.state.time !== nextProps.item.time){
    		return true;
    	}
    	if(t.state.avasrc !== nextProps.item.avasrc){
    		return true;
    	}
    	if(t.state.realname !== nextProps.item.realname){
    		return true;
    	}
    	if(t.state.nickname !== nextProps.item.nickname){
    		return true;
    	}
    	if(t.state.msgtype !== nextProps.item.msgtype){
    		return true;
    	}
    	if(t.state.content !== nextProps.item.content){
    		return true;
    	}
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

module.exports = Chatitem;
