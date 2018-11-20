require('./PageHome.styl');

const reactMixin = require('react-mixin');
const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button } = SaltUI;
let { hashHistory, browserHistory} = ReactRouter;

const {Dingsdk} = require('../../../common/DongCommon.js').Api;
class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: [{
                text: '竞品动态',
                icon: require('../../../images/home/dynamic.png'),
                route: 'dynamicpage'
            }]
        };
    }

    handleClick(options) {
        Toast.show(options);
    }

    handleRouter(route) {
        location.hash = route;
    }

    handleLink(link) {
        location.hash = link;
    }
    
    componentWillMount() {
    }
    
    componentDidMount() {
    	Dingsdk.setTitle("功能列表");
    	Dingsdk.setRight({show:true, control: false});
    }

   render() {
        let t = this;
        return (
            <div className="page-home">
		      <Grid square={true} col={3}>
	          {
	              t.state.icons.map((item, index) => {
	                  return (
	                      <div key={'icon' + index} className="t-FBV t-FBAC t-FBJC home-grid-item t-TE" onClick={t.handleRouter.bind(t, item.route)}>
	                          <div className="home-grid-icon">
	                              <img src={item.icon} width="35" height="35"/>
	                          </div>
	                          <div className="t-FC6 icon-text">{item.text}</div>
	                      </div>
	                  )
	              })
	          }
	          </Grid>
            </div>
        );
    }
}

module.exports = PageHome;
