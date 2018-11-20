require('./PageGoodsdetail.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Tab } = SaltUI;

class Goodsdetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="goodsdetail">
            	<Tab active={1}>
		            <Tab.Item title="基本信息">
		            1
		            </Tab.Item>
		            <Tab.Item title="商品详情">
	            	2
		            </Tab.Item>
		            <Tab.Item title="参数">
		            3
		            </Tab.Item>
		            <Tab.Item title="评价">
		    		4
		            </Tab.Item>
	            </Tab>
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

reactMixin.onClass(Goodsdetail, Reflux.connect(Store, 'Goodsdetail'));

module.exports = Goodsdetail;
