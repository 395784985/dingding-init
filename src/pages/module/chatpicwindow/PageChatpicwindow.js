require('./PageChatpicwindow.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

const {ComTabbar, ComGallery, ComGrid, ComPerson, ComList, ComChat } = require("../../../components/DongSaltUI.js");
const {ComList1, ComList2, ComList3, ComList4, ComList5, ComList6 } = ComList;
const {ComBottom, ComItem, ComPicText} = ComChat;

class Chatpicwindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		piclist:[{
        		title:'付出，得遇上对的人',
        		time:'05-06',
        		picsrc:'http://www.sd.xinhuanet.com/news/yule/2017-04/16/1120817892_14923056975041n.jpg',
        		content:'呵呵',
        		link:'http://www.it-api.com',
        	},{
        		title:'做人傻一点才幸福，太聪明会很累',
        		time:'05-05',
        		picsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494060678563&di=842cf41221ca3c0bbfc9f48016d63ee0&imgtype=0&src=http%3A%2F%2Ffile.ynet.com%2F2%2F1703%2F21%2F12564648-500.jpg',
        		content:'哈哈',
        		link:'http://www.it-api.com',
        	},{
        		title:'人和人靠的太近将是一场灾难（读懂的人都了不起）',
        		time:'05-04',
        		picsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494060678724&di=4c6e3a444383e852d0506ca11e5258ae&imgtype=0&src=http%3A%2F%2Fwww.wanhuajing.com%2Fpic%2F1702%2F0218%2F2100883%2F9_640_960.jpg',
        		content:'嘿嘿',
        		link:'http://www.it-api.com',
        	},],
        	piclist2:[{
        		title:'曹操惹争议 刘备帮回应',
        		time:'05-05',
        		picsrc:'http://i3.sinaimg.cn/ent/x/2010-05-13/1273721839_M0NBI3.jpg',
        		content:'于和伟还称新《三国》还原了曹操的真相：“小说是有明显倾向的，觉得刘备是大汉正统，曹操是篡位奸雄，新《三国》还原了一些曹操的真实历史，有人就觉得受不了。',
        		link:'http://ent.sina.com.cn/x/2010-05-13/11372956683.shtml',
        	},],
        	piclist3:[{
        		title:'新版《三国》明日开播 文戏很颠覆武戏超震撼',
        		time:'05-04',
        		picsrc:'http://photocdn.sohu.com/20100501/Img271876238.jpg',
        		content:'相比以蜀为主线的《三国演义》，高希希这次将曹操设定为最重要人物！剧中的曹操，不再是奸诈小人，他将取代蜀国刘备，成为第一男主角。“陈建斌(在线看影视作品)塑造了一个很有意思的曹操，没有加太多主观色彩，只是把曹操的行为表现出来，观众去看看，他到底是忠是奸。”',
        		link:'http://yule.sohu.com/20100501/n271876236.shtml',
        	},],
        };
    }

    render() {
    	let t = this;
    	return (
            <div className="chatpicwindow">
            	<div className="scroll-auto t-PB50 t-P16">
            		<ComPicText piclist={t.state.piclist2}  />
            		<ComPicText piclist={t.state.piclist} />
         			<ComPicText piclist={t.state.piclist3}  />
            	</div>
            	<ComBottom />
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
//    	$('.chatpicwindow').scrollTop( $('.chatpicwindow')[0].scrollHeight());
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

reactMixin.onClass(Chatpicwindow, Reflux.connect(Store, 'Chatpicwindow'));

module.exports = Chatpicwindow;
