require('./Comlist.styl');
const { List,Group, Icon} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;


class Comlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		list:[{
    			infoType:'pay',
        		msgIconUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		msgName:'支付助手',
        		msgTime:'2017.04.30',
        		title:'¥3.90',
        		text:'免密支付成功',
//        		imgUrl:'https://gw.alicdn.com/tps/TB1HMQVJpXXXXbZXpXXXXXXXXXX-640-340.jpg',
        		button:[
        			{name: '查看详情', icon: '', route: ''},
        		],
        		comment:[
        			{content:'mickey:都答对了嘛'},
        			{content:'南极冰焰回复Mickey:对了'}
        		]
        	},{
        		infoType:'huabai',
        		msgIconUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		msgName:'蚂蚁花呗.本月账单',
        		msgTime:'2017.04.30',
        		title:'¥227.91',
        		text:'还款日 05月09日',
        		imgUrl:'https://img.alicdn.com/tps/TB1mKYuJFXXXXbFXpXXXXXXXXXX-375-140.png',
        		button:[
        			{name: '分期付款', icon: '', route: ''},
        			{name: '立即还款', icon: '', route: ''},
        		],
        		comment:[
        			{content:'mickey:都答对了嘛'},
        			{content:'南极冰焰回复Mickey:对了'}
        		]
        	},{
        		infoType:'movie',
        		msgIconUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		msgName:'熊猫电影',
        		msgTime:'2017.04.30',
        		title:'',
        		text:'',
        		imgUrl:'http://i3.sinaimg.cn/ent/x/2010-05-13/1273721839_M0NBI3.jpg',
        		button:[
        			{name: '查看详情', icon: '', route: ''},
        		],
        		comment:[
        			{content:'mickey:都答对了嘛'},
        			{content:'南极冰焰回复Mickey:对了'}
        		]
        	},{
        		infoType:'share',
        		msgIconUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		msgName:'赵旭东',
        		msgTime:'2017.04.30',
        		title:'',
        		text:'我共享了1张优惠券，无需领取，到店买单即可使用，仅此一张，小伙伴们先到先得哦，不谢！',
        		imgUrl:'https://gw.alicdn.com/tps/TB1HMQVJpXXXXbZXpXXXXXXXXXX-640-340.jpg',
        		button:[
        			{name: '赞', icon: '', route: ''},
        			{name: '评论', icon: '', route: ''},
        			{name: '打赏', icon: '', route: ''},
        		],
        		comment:[
        			{content:'mickey:都答对了嘛'},
        			{content:'南极冰焰回复Mickey:对了'}
        		]
        	},]
        };
    }
    
    handleClick(event,dataItem){

        console.log(event);
        console.log(dataItem);

    }

    handleClickImg(event,imgUrl){

        console.log(event);
        console.log(imgUrl);
    }

    handleDelete(event,dataItem){

        console.log(event);
        console.log(dataItem);
    }

    render() {
    	let t = this;
        return (
            <div className="comlist6">
	            <Group className='demo-t-list'>
	                <Group.Head className='t-demo-title t-P4'>我的动态</Group.Head>
	                <Group.List>
		                {
		            		t.state.list.map((item, index)=>{
		            			return(
	            					<div className='demo2-t-list-wrap t-MB12'>
		     	                        <HBox hAlign="start" className="demo2-t-list-title t-PT6 t-PL6 t-PR6">
		     	                            <Box className="t-LH30">
		     	                                <img className="t-R5" src={item.msgIconUrl} width={35} height={35} /> 
		     	                            </Box>
		     	                            <Box>
		     	                                <VBox className="t-PL6">
		     	                                	<Box className="t-LH20">{item.msgName}</Box>
		     	                                	<Box className="t-LH15 t-FS12 t-FC9">{item.msgTime}</Box>
		     	                                </VBox>
		     	                            </Box>
		     	                        </HBox>
		     	                       <VBox hAlign="center" className="t-PL12 t-PR12">
		     	                       		{
		     	                       			item.title || item.text ? (
	     	                       					<Box className="t-PT6 t-PB6">
	     	                       						<VBox hAlign="center">
		     	                       						<Box className="t-FS20 t-LH20">{item.title}</Box>
		     	                       						<Box className="t-FS14 t-LH20 t-FC6 t-omit2">{item.text}</Box>
		     	                       					</VBox>
	     	                       					</Box>
		     	                       			) : ''
		     	                       		}
	     	                                {
	     	                                	item.imgUrl ? (
     	                                			<Box className="imgBox">
	    	     	                                	<img src={item.imgUrl} className="imgUrl" />
	    	     	                                </Box>
	     	                                	) : ''
	     	                                }
	     	                                {
	     	                                	item.button && item.button.length > 0 ? (
     	                                			<Box style={{width:'100%'}}>
	    		     	                       			<HBox hAlign="center" vAlign="center" className="t-P6 t-BB1">
	    		     	                       				{
	    		     	                       					item.button && item.button.length>0 ? item.button.map((itm, idx)=>{
	    		     	                       						return(
	    		     	                       							<Box className="t-FS16 t-LH30 btn-name">{itm.name}</Box>
	    		     	                       						)
	    		     	                       					}) : ''
	    		     	                       				}
	    		     	                       			</HBox>
	    		     	                       		</Box>
	     	                                	) : ''
	     	                                }
		     	                        </VBox>
		     	                    </div>
				                )
		            		})
		            	}
	                </Group.List>
	            </Group>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
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

module.exports = Comlist;
