require('./Goodslistitem.styl');
const { Group, Avatar} = SaltUI;

const { HBox, VBox, Box } = SaltUI.Boxs;

class Goodslistitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		list:[{
    			imgsrc:'http://gw2.alicdn.com/bao/uploaded/i2/TB1LD6OQVXXXXckXXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
        		name:'【限时直降】Apple/苹果 iPhone 7 移动联通4G智能手机 原封正品',
        		price:'4588',
        		oldprice:'5688',
        		freight:'免运费',
        		salesnum:'2999人付款',
        		city:'北京'
    		},{
    			imgsrc:'http://gw1.alicdn.com/bao/uploaded/i1/TB1KsnHQVXXXXbcXpXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
        		name:'【限时限量抢】Apple/苹果 iPhone 7 Plus 128G 红色全网通手机',
        		price:'¥6188',
        		oldprice:'¥7188',
        		freight:'免运费',
        		salesnum:'23999人付款',
        		city:'石家庄'
    		},{
    			imgsrc:'http://gw3.alicdn.com/bao/uploaded/i4/TB1fCq9NXXXXXXRXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
        		name:'iPhone 7 Plus 128G 红色全网通手机',
        		price:'¥5188',
        		oldprice:'¥6188',
        		freight:'免运费',
        		salesnum:'999人付款',
        		city:'北京'
    		},{
    			imgsrc:'http://gw3.alicdn.com/bao/uploaded/i3/201522459/TB2YgPPXyGO.eBjSZFEXXcy9VXa_!!201522459.jpg_210x210.jpg',
        		name:'【限时限量抢】Apple/苹果 iPhone 6 Plus 128G 红色全网通手机',
        		price:'¥3188',
        		oldprice:'¥5188',
        		freight:'免运费',
        		salesnum:'239人付款',
        		city:'天津'
    		},]
        };
    }
    
    handleRoute(item){
    	alert(11);
    	console.log(11111);
    	console.log(JSON.stringify(item));
    	location.hash="goodsdetail";
    }

    render() {
    	let t = this;
        return (
            <div className="goodslistitem">
            	{
            		t.state.list.map((item, index) =>{
            			return(
        					<HBox className="t-P12 g-item" onclick={t.handleRoute.bind(t, item)}>
            	           		<Box className="">
            	           			<img src={item.imgsrc} width={100} height={100} onclick={t.handleRoute.bind(t, item)} />
            	           		</Box>
            	           		<Box className="t-ML10">
            	           			<VBox className="">
            		           			<Box className="g-name t-LH20 t-MT4 t-MB8 t-omit2">
            		           			{item.name}
            			           		</Box>
            			           		<Box className="t-LH25">
            			           			<span className="g-price">{item.price}</span> <span className="g-oldprice">{item.oldprice}</span>
            			           		</Box>
            			           		<Box className="" >
            			           			<HBox className="t-LH25 g-bottom" hAlign="start">
            			           				<Box className="t-FL">{item.freight}&nbsp;&nbsp;&nbsp;&nbsp;</Box>
            			           				<Box className="t-FL">{item.salesnum}&nbsp;&nbsp;&nbsp;&nbsp;</Box>
            			           				<Box className="t-FR t-MR4">{item.city}</Box>
            			           			</HBox>
            			           		</Box>
            	           			</VBox>
            	           		</Box>
            	           </HBox>
            			)
            		})
            	}
	           
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

module.exports = Goodslistitem;
