require('./PageChatwindow.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const {ComTabbar, ComGallery, ComGrid, ComPerson, ComList, ComChat } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4, ComList5, ComList6 } = ComList;
const {ComBottom, ComItem} = ComChat;

class Chatwindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	chatItems:[{
        		oneself:true,
            	time:'',
            	avasrc:'http://wx4.sinaimg.cn/mw690/6d6c090ely1fer0o34iygg205k03kn81.gif',
            	realname:'鹿晗',
            	nickname:'陈长生',
            	msgtype:'text',
            	content:'我要改命！你可以帮助我吗！',
        	},{
        		oneself:true,
            	time:'',
            	avasrc:'http://wx4.sinaimg.cn/mw690/6d6c090ely1fer0o34iygg205k03kn81.gif',
            	realname:'鹿晗',
            	nickname:'陈长生',
            	msgtype:'pic',
            	content:'http://fun.youth.cn/yl24xs/201704/W020170417492729290729.png',
        	},{
        		oneself:false,
            	time:'',
            	avasrc:'http://imgsrc.baidu.com/baike/pic/item/e824b899a9014c087d101a190e7b02087bf4f466.jpg',
            	realname:'古力娜拉',
            	nickname:'',
            	msgtype:'text',
            	content:'我操作星盘大阵来帮助你，👌',
        	},{
        		oneself:true,
            	time:'',
            	avasrc:'http://h.hiphotos.baidu.com/zhidao/pic/item/908fa0ec08fa513d01115a8c3a6d55fbb2fbd92c.jpg',
            	realname:'陈长生',
            	nickname:'鹿晗',
            	msgtype:'text',
            	content:'周独夫是他建造了星盘大阵，🌧️',
        	},{
        		oneself:false,
            	time:'',
            	avasrc:'http://img3.duitang.com/uploads/item/201607/25/20160725213118_3AHJT.thumb.700_0.jpeg',
            	realname:'古力娜拉',
            	nickname:'拉拉',
            	msgtype:'pic',
            	content:'http://www.sxdaily.com.cn/NMediaFile/2017/0424/SXRB201704241332000342003886121.jpg',
        	},],
        };
    }

    render() {
    	let t = this;
    	return (
            <div className="chatwindow">
            	<div className="chatrecord scroll-auto t-PB50">
            		{
            			t.state.chatItems.map((item, index) =>{
            				return(<ComItem item = {item} />)
            			})
            		}
            		{
            			t.state.chatItems.map((item, index) =>{
            				return(<ComItem item = {item} />)
            			})
            		}
            	</div>
            	<ComBottom />
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
//    	$('#chatrecord').scrollTop( $('#chatrecord')[0].scrollHeight);
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

reactMixin.onClass(Chatwindow, Reflux.connect(Store, 'Chatwindow'));

module.exports = Chatwindow;
