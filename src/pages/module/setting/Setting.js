require('./Setting.styl');
const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button, Group, Avatar } = SaltUI;
const {ComTabbar, ComGallery, ComGrid, ComPerson2, ComList } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4, ComList5 } = ComList;

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
            	<div className="scroll-auto t-PB50">
            		<ComPerson2 />
	            	<ComList5 />
	            	<ComList5 />
	            	<ComList5 />
            	</div>
	          	<ComTabbar activeIndex = {4} />
            </div>
        );
    }
}

module.exports = PageHome;
