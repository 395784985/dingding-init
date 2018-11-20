require('./PageGoodslist.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button, Group, Avatar } = SaltUI;
const {ComTabbar, ComGallery, ComGrid, ComPerson2, ComList, ComGoods, ComSearch1 } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4, ComList5 } = ComList;

const {ComGoodsList, ComGoodsDetail} = ComGoods;

class Goodslist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="goodslist">
	            <ComSearch1 />
	        	<div className="scroll-auto t-PB50">
	        		<ComGoodsList />
	        		<ComGoodsList />
	        		<ComGoodsList />
	        	</div>
	          	<ComTabbar activeIndex = {0} />
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

reactMixin.onClass(Goodslist, Reflux.connect(Store, 'Goodslist'));

module.exports = Goodslist;
