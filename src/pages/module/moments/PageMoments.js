require('./PageMoments.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const { Grid, Gallery, TabBar, NavBar, Icon, Toast, Button, Group, Avatar } = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;
const {ComTabbar, ComGallery, ComGrid, ComPerson, ComList } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4 } = ComList;

class Moments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="moments">
	            <div className="scroll-auto t-PB50">
	            	<HBox vAlign="end" hAlign="end" className="wrapper">
		                <Box className="box2">
		                   赵旭东
		                </Box>
		                <Box className="box1">
		                	<img src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80}  /> 
		                </Box>
		            </HBox>
		            <HBox className="moment-wp t-border">
		            	<Box className="moment-left t-P8">
		            		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		            	</Box>
		            	<Box className="moment-right">
			            	<VBox className="moment-wp t-PT6 t-PB6 t-PR6">
				            	<Box className="moment-name t-LH25">
				            		赵旭东
				            	</Box>
				            	<Box className="moment-content t-LH18 t-PB4">
				            		分享一下....
				            	</Box>
				            	<Box className="moment-share ">
				            		<HBox className="t-PT6 t-PR6 t-PL6 t-PB4">
				            		   <Box><img src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={40} height={40} /></Box>
				            		   <Box className="t-P4 t-LH15">周末好去处：北京后花园延庆玉渡山风景区</Box>
				            		</HBox>
					            </Box>
			            		<Box className="moment-date t-LH25">
			            			昨天
			            		</Box>
				            </VBox>
		            	</Box>
		            </HBox>
		            
		            
		            <HBox className="moment-wp t-border">
		            	<Box className="moment-left t-P8">
		            		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		            	</Box>
		            	<Box className="moment-right">
			            	<VBox className="moment-wp t-PT6 t-PB6 t-PR6">
				            	<Box className="moment-name t-LH25">
				            		赵旭东
				            	</Box>
				            	<Box className="moment-content t-LH18 t-PB4">
				            		谁有光头强电话，让他来北京！！把杨树，柳树，各种树全砍了，李老板不给钱，我给，整个北京现在全是毛！！！！都是毛！！！都是毛！！！糊我脸，挡我眼，堵我鼻子，没人管，所以砍他。。。
				            	</Box>
			            		<Box className="moment-date t-LH25">
			            			昨天
			            		</Box>
				            </VBox>
		            	</Box>
		            </HBox>
		            
		            <HBox className="moment-wp t-border">
		            	<Box className="moment-left t-P8">
		            		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		            	</Box>
		            	<Box className="moment-right">
			            	<VBox className="moment-wp t-PT6 t-PB6 t-PR6">
				            	<Box className="moment-name t-LH25">
				            		赵旭东
				            	</Box>
				            	<Box className="moment-content t-LH18 t-PB4">
				            		五一到了，放假都去哪里玩呢.................
				            	</Box>
				            	<Box className="moment-img">
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
					            </Box>
			            		<Box className="moment-date t-LH25">
			            			1小时前
			            		</Box>
				            </VBox>
		            	</Box>
		            </HBox>
		            
		            <HBox className="moment-wp t-border">
		            	<Box className="moment-left t-P8">
		            		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		            	</Box>
		            	<Box className="moment-right">
			            	<VBox className="moment-wp t-PT6 t-PB6 t-PR6">
				            	<Box className="moment-name t-LH25">
				            		赵旭东
				            	</Box>
				            	<Box className="moment-content t-LH18 t-PB4">
				            		五一到了，放假都去哪里玩呢.....
				            	</Box>
				            	<Box className="moment-img">
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={200} height={200} />
					            </Box>
			            		<Box className="moment-date t-LH25">
			            			昨天
			            		</Box>
				            </VBox>
		            	</Box>
		            </HBox>
		            
		            <HBox className="moment-wp t-border">
		            	<Box className="moment-left t-P8">
		            		<Avatar src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={80} height={80} />
		            	</Box>
		            	<Box className="moment-right">
			            	<VBox className="moment-wp t-PT6 t-PB6 t-PR6">
				            	<Box className="moment-name t-LH25">
				            		赵旭东
				            	</Box>
				            	<Box className="moment-content t-LH18 t-PB4">
				            		五一到了，放假都去哪里玩呢.....
				            	</Box>
				            	<Box className="moment-img">
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={120} height={120} />
				            		<img className="t-PT2 t-PR4" src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={120} height={120} />
					           </Box>
			            		<Box className="moment-date t-LH25">
			            			昨天
			            		</Box>
				            </VBox>
		            	</Box>
		            </HBox>
		        </div>
		      	<ComTabbar activeIndex = {2} />
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

reactMixin.onClass(Moments, Reflux.connect(Store, 'Moments'));

module.exports = Moments;
