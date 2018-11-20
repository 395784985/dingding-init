require('./Comtabbar.styl');

const { TabBar, Icon} = SaltUI;
const {Dingsdk} = require('../../common/DongCommon.js').Api;



const starUrl = '//gw.alicdn.com/tps/TB1Ofp3NpXXXXXDXVXXXXXXXXXX-216-200.png';
const starActiveUrl = '//gw.alicdn.com/tps/TB1gERVNpXXXXXXaXXXXXXXXXXX-216-200.png';
const peopleUrl = '//gw.alicdn.com/tps/TB1bc1XNpXXXXciXpXXXXXXXXXX-200-200.png';
const peopleActiveUrl = '//gw.alicdn.com/tps/TB174GlNpXXXXaHXXXXXXXXXXXX-200-200.png';

class Comtabbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		activeIndex: 0,
        };
        this.tabBarItems = [
            { title: '首页', icon: 'star', name: 'home'},
            { title: '消息', icon: 'info-circle', name: 'chatlist' },
            { title: '朋友圈', icon: 'toast-loading', name: 'moments'},
            { title: '联系人', icon: 'user', name: 'user', badge: 3 },
            { title: '设置', icon: 'setting', name: 'setting', badge: 'new' },
            { title: '社区', icon: [peopleUrl, peopleActiveUrl], name: 'hidden', badge: 3 },
          ];
    }
    
    handleClick(options) {
        Toast.show(options);
    }

    handleRouter(activeIndex) {
    	console.log("index:" + activeIndex);
    	if(activeIndex == 0){
    		location.hash = 'home';
    	}else if(activeIndex == 1){
    		location.hash = 'dynamic';
    	}else if(activeIndex == 2){
    		location.hash = 'moments';
    	}else if(activeIndex == 3){
    		location.hash = 'contact';
    	}else if(activeIndex == 4){
    		location.hash = 'setting';
    	}
    }

    handleLink(link) {
        location.hash = link;
    }

    render() {
    	  let t = this;
    	  let onChange = (activeIndex)=> {
  	        console.log(activeIndex);
  	      };
  	
  	      const tabBarStyle = {
  	        borderTop: '1px solid #ccc',
  	        boxShadow: '0 0 4px 0 #999'
  	      };
  	
  	      const tabBarItemTitleStyle = {
  	        //color: '#666',
  	      };
  	      const tabBarItemTitleActiveStyle = {
  	        //color: '#3671D6',
  	      };
  	      const tabBarItemIconStyle = {
  	        //fill: '#333',
  	        width: 30,
  	        height: 30,
  	      };
  	      const tabBarItemIconActiveStyle = {
  	        //fill: '#3671D6',
  	      };
        return (
            <div className="comtabbar">
            	<TabBar tabBarStyle={tabBarStyle} activeIndex={t.state.activeIndex} onChange={t.handleRouter.bind(this)}>
		          {
		        	  t.tabBarItems.map((item, idx) => {
				            if (item.name === 'hidden') {
				            	return null;
				            }
				            return (
					            <TabBar.Item
					              key={idx}
					              badge={item.badge}
					              title={item.title}
					              titleStyle={tabBarItemTitleStyle}
					              activeTitleStyle={tabBarItemTitleActiveStyle}
					              icon={item.icon}
					              activeIcon={item.activeIcon}
					              iconStyle={tabBarItemIconStyle}
					              activeIconStyle={tabBarItemIconActiveStyle}
					            >
				            </TabBar.Item>
				            )
			          	})
		          	}
		          </TabBar>
            </div>
        );
    }

    componentWillMount() {
    	let t = this;
    	t.state.activeIndex = t.props.activeIndex ? t.props.activeIndex : 0;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    	let t = this;
    	t.state.activeIndex = nextProps.activeIndex ? nextProps.activeIndex : 0;
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

module.exports = Comtabbar;
