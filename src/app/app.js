require('./app.styl');

if (__LOCAL__ && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
    // see https://github.com/livereload/livereload-extensions/issues/26
    setInterval(function() {
        document.body.focus();
    }, 200);
}

// bind fastclick
window.FastClick && FastClick.attach(document.body);

const { Router, Route, IndexRoute, Link, hashHistory,browserHistory } = ReactRouter;

const PageDemo = require('../pages/demo');
const PageHome = require('../pages/home');
const PageContact = require('../pages/module/contact');
const PageDynamic = require('../pages/module/dynamic');
const PageSetting = require('../pages/module/setting');
const PageMoments = require('../pages/module/moments');
const PageChatwindow = require('../pages/module/chatwindow');
const PageChatpicwindow = require('../pages/module/chatpicwindow');

const PageGoodsdetail = require('../pages/goods/goodsdetail');
const PageGoodslist = require('../pages/goods/goodslist');




const PageMarketlist = require('../pages/market/list');
const PageDynamicCreate = require('../pages/market/dynamic/dynamiccreate');
const PageDynamicPage = require('../pages/market/dynamic/dynamicpage');
const PageDynamicDetail = require('../pages/market/dynamic/dynamicdetail');
const PageDynamicEdit = require('../pages/market/dynamic/dynamicedit');

const PageCalendarDemo = require('../demo/PageCalendarDemo.js');
const PageScrollList = require('../demo/PageScrollList.js');

const PageAvatar = require('../pages/demo/display/PageAvatar.js');
const PageCalendar = require('../pages/demo/display/PageCalendar.js');
const PageGallery = require('../pages/demo/display/PageGallery.js');
const PageList = require('../pages/demo/display/PageList.js');
const PageMask = require('../pages/demo/display/PageMask.js');
const PageRate = require('../pages/demo/display/PageRate.js');
const PageSearchBar = require('../pages/demo/display/PageSearchBar.js');
const PageSlide = require('../pages/demo/display/PageSlide.js');
const PageSlot = require('../pages/demo/display/PageSlot.js');
const PageSwitch = require('../pages/demo/display/PageSwitch.js');
const PageTab = require('../pages/demo/display/PageTab.js');

//Reflux
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

class App extends React.Component {
    render() {
    	let t = this;
      	console.log("init...start...login= " + t.state.change);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
    componentWillMount(){
    	 Actions.login(function(content){
    		 console.log("callback:" + content);
         });
    	 console.log("init...end");
    }
}

class Demo extends React.Component {
    render() {
    	let t = this;
      	console.log("init...start...login...");
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
    componentWillMount(){
    	 console.log("init...end");
    }
}

class Market extends React.Component {
    render() {
    	let t = this;
      	console.log("init...start...login...");
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
    componentWillMount(){
    	 console.log("init...end");
    }
}

reactMixin.onClass(App, Reflux.connect(Store));
module.exports = App;
module.exports = Demo;
module.exports = Market;
//http://192.168.20.86:3001/#/?_k=fcfkmm
//http://192.168.20.86:3001/#/demo?_k=fcfkmm

//高效、简洁的移动端 UI 组件库 https://salt-ui.github.io/
ReactDOM.render(
    <Router history={hashHistory}>
		<Route name="app" path="/" component={App}>
		    <IndexRoute component={PageHome}/>
		    <Route path="home" component={PageHome}/>
		    <Route path="contact" component={PageContact}/>
		    <Route path="dynamic" component={PageDynamic}/>
		    <Route path="setting" component={PageSetting}/>
		    <Route path="moments" component={PageMoments}/>
		    <Route path="chatwindow" component={PageChatwindow}/>
		    <Route path="chatpicwindow" component={PageChatpicwindow}/>
		    <Route path="goodsdetail" component={PageGoodsdetail}/>
		    <Route path="goodslist" component={PageGoodslist}/>
		    
		</Route>
		    
	    <Route name="demo" path="/demo" component={Demo}>
			<IndexRoute component={PageScrollList}/>
			<Route path="canlender" component={PageCalendarDemo}/>
			<Route path="avatar" component={PageAvatar}/>
			<Route path="gallery" component={PageGallery}/>
			<Route path="list" component={PageList}/>
			<Route path="mask" component={PageMask}/>
			<Route path="rate" component={PageRate}/>
			<Route path="searchBar" component={PageSearchBar}/>
			<Route path="slide" component={PageSlide}/>
			<Route path="switch" component={PageSwitch}/>
			<Route path="tab" component={PageTab}/>
			<Route path="scroll" component={PageScrollList}/>
		</Route>
    
        <Route name="market" path="/market" component={Market}>
            <IndexRoute component={PageHome}/>
            <Route path="PageMarketlist" component={PageMarketlist}/>
            
            <Route path="dynamiccreate" component={PageDynamicCreate}/>
            <Route path="dynamicpage" component={PageDynamicPage}/>
            <Route path="dynamicdetail/:id" component={PageDynamicDetail}/>
            <Route path="dynamicedit/:id" component={PageDynamicEdit}/>
        </Route>
    </Router>,
    document.getElementById('App')
);
