require('./Comlist.styl');
const { List,Group, Icon, Avatar} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;


class Comlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	list:[{
        		imgUrl:'http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg',
        		name:'dong',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1S02rJFXXXXcuXpXXXXXXXXXX-58-58.png',
        		name:'张三',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1eoLXJFXXXXaFXVXXXXXXXXXX-60-60.png',
        		name:'李四',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1S02rJFXXXXcuXpXXXXXXXXXX-58-58.png',
        		name:'张无',
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
		            <Group.Head className='t-demo-title t-P4'>通讯录</Group.Head>
		            <Group.List lineIndent={15}>
		            	{
		            		t.state.list.map((item, index)=>{
		            			return(
		            				<div className="t-P6">
				                        <div className='demo-t-list-wrap-single'>
				                            <HBox vAlign="center">
				                                <HBox flex={1}>
				                                    <Box>
				                                        <Avatar src={item.imgUrl} width={44} height={44} className='demo-t-list-img'/>
				                                    </Box>
				                                    <Box className='demo-t-list-text-content-single t-LH44 t-PL6' flex={1}>
				                                        <p className='demo-t-list-title-single omit '>{item.name}</p>
				                                    </Box>
				                                </HBox>
				                                <Box>
				                                    <Icon name="angle-right" width={20} fill="#ccc" className='demo-t-list-arrow'/>
				                                </Box>
				                            </HBox>
				                        </div>
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
