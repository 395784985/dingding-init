require('./Dynamic.styl');
const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button, Group, Avatar } = SaltUI;
const {ComTabbar, ComGallery, ComGrid, ComPerson, ComList } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4 } = ComList;

class Page extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    componentDidMount() {
//    	Dingsdk.setTitle("首页");
//    	Dingsdk.setRight({show:true, control: false});
    }

    render() {
	      let t = this;
          return (
            <div className="page-home">
            	<div className="scroll-auto t-PB50">
	            	
	            	<ComList1 />
            	</div>
	          	<ComTabbar activeIndex = {1} />
            </div>
        );
    }
}

module.exports = Page;
