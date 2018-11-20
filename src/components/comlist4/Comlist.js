require('./Comlist.styl');
const { List,Group, Icon} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;


class Comlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		list:[{
        		imgUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		title:'水上山庄',
        		content:'辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍辅助信息介绍',
        		date:'有效期：2016.10.12-2016.11.21',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png',
        		title:'水上公园',
        		content:'水上公园水上公园水上公园水上公园水上公园水上公园水上公园水上公园',
        		date:'2017.04.30',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1EtbhJFXXXXc5XFXXXXXXXXXX-375-140.png',
        		title:'颐和园',
        		content:'颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园颐和园',
        		date:'2016.12.09',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png',
        		title:'圆明园',
        		content:'圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园圆明园',
        		date:'2015.08.09',
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
            <div className="comlist">
	            <Group className='demo-t-list'>
	                <Group.Head className='t-demo-title t-P6'>信息卡列表</Group.Head>
	                <Group.List lineIndent={80}>
		                {
		            		t.state.list.map((item, index)=>{
		            			return(
	            					<div className='demo3-t-list-wrap t-M8 t-LH20'>
		    	                        <HBox vAlign="center">
		    	                            <HBox flex={1}>
		    	                                <Box>
		    	                                    <img src={item.imgUrl} width={60} height={60} className='demo3-t-list-img'/>
		    	                                </Box>
		    	                                <Box className='demo3-t-list-text-content t-PL10' flex={1}>
		    	                                    <p className='demo3-t-list-title t-omit'>{item.title}<span className='demo3-t-list-cricle'></span></p>
		    	                                    <p className='demo3-t-list-text t-omit'>{item.content}</p>
		    	                                    <p className='demo3-t-list-time t-omit'>{item.date}</p>
		    	                                </Box>
		    	                            </HBox>
		    	                        </HBox>
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
