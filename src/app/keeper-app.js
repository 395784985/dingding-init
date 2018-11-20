require('./app.styl');

if (__LOCAL__ && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
    // see https://github.com/livereload/livereload-extensions/issues/26
    setInterval(function() {
        document.body.focus();
    }, 200);
}

// bind fastclick
window.FastClick && FastClick.attach(document.body);

/**
 * react-keeper Demo
 * 
 * 启动方式：nowa server -e app/keeper-app.js
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-keeper'

import PageSlot from '../pages/demo/display/PageSlot'
import PageSwitch from '../pages/demo/display/PageSwitch'
import PageSlide from '../pages/demo/display/PageSlide'

class KeeperDemo extends React.Component {
    render() {
    	let t = this;
      	console.log("init...start...login...");
        return (
    		<HashRouter>
                <div>
                  <Route cache component={ PageSwitch } path="/switch" />
                  <Route cache component={ PageSlide }  path="/slide" />
                  <Route path="/mod">
                      <Route component={ PageSwitch }  path="/switch"/>
                      <Route component={ PageSlide }  path="/slide"/>
                  </Route>
                </div>
            </HashRouter>
        );
    }
    componentWillMount(){
    	 console.log("init...end");
    }
}

ReactDOM.render(<KeeperDemo/>, document.getElementById('App'))  
