require('./PageHome.styl');
const {Dingsdk} = require('../../common/DongCommon.js').Api;
const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button, Group, Avatar } = SaltUI;
const {ComTabbar, ComGallery, ComGrid, ComPerson, ComList, ComSearch1, ComNavbar } = require("../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4, ComList5, ComList6 } = ComList;

class PageHome extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    componentDidMount() {
    	Dingsdk.setTitle("首页");
    	Dingsdk.setRight({show:true, control: false});
    }

    render() {
	      let t = this;
          return (
            <div className="page-home">
            	<ComSearch1 />
            	<div className="scroll-auto t-PB50">
	            	<ComGallery isShow={true} title={"标题"} />
	            	<ComGrid />
	            	<ComPerson />
	            	<ComList6 />
            	</div>
	          	<ComTabbar activeIndex = {0} />
            </div>
        );
    }
}

module.exports = PageHome;
