require('./Comlist.styl');
const { List,Group, Icon} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;


class Comlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		list:[{
        		imgUrl:'https://img.alicdn.com/tps/TB1mKYuJFXXXXbFXpXXXXXXXXXX-375-140.png',
        		title:'水上公园',
        		date:'2017.04.30',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1EtbhJFXXXXc5XFXXXXXXXXXX-375-140.png',
        		title:'颐和园',
        		date:'2016.12.09',
        	},{
        		imgUrl:'https://img.alicdn.com/tps/TB1mKYuJFXXXXbFXpXXXXXXXXXX-375-140.png',
        		title:'圆明园',
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
	                <Group.Head className='t-demo-title t-P4'>图文纵排</Group.Head>
	                <Group.List>
		                {
		            		t.state.list.map((item, index)=>{
		            			return(
	            					<div className='demo2-t-list-wrap'>
		     	                        <HBox vAlign="center">
		     	                            <HBox flex={1}>
		     	                                <Box className="demo2-t-list-img-wrap t-MA" >
		     	                                    <img src={item.imgUrl} style={{width:'100%'}} height={140} className='demo2-t-list-img'/>
		     	                                </Box>
		     	                            </HBox>
		     	                        </HBox>
		     	                        <HBox className="demo2-t-list-title t-LH30 t-PL6 t-PR6">
		     	                            <Box flex={1}>
		     	                                <p className='demo2-t-list-title-content t-omit'>{item.title}</p>
		     	                            </Box>
		     	                            <Box>
		     	                                <span className='demo2-t-list-time'>{item.date}</span>
		     	                            </Box>
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
