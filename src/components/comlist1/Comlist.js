require('./Comlist.styl');
const { List,Group, Icon} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;


class Comlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        		data:[{
	                imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
	                text : "中午一起吃饭吗？",
	                title : "赵旭东",
	                date : "今天",
	                id:1,
	            },{
	                imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
	                text : "在哪个会议室？",
	                title : "李强",
	                date : "04月29日",
	                id:2,
	            },,{
                    imgUrl : "https://img.alicdn.com/tps/TB1GnjaJFXXXXcpXFXXXXXXXXXX-2448-1836.jpg",
                    text : "就想要这样一间小木屋，夏天挫冰吃，冬天为炉取暖，秋天静看落叶，春天畅闻花香",
                    title : "小木屋",
                    date : "04月30日"
                },{
                    imgUrl : "https://img.alicdn.com/tps/TB1KC9.JFXXXXX0XVXXXXXXXXXX-225-225.jpg",
                    text : "能和心爱的人一起睡觉，是件幸福的事情",
                    title : "幸福",
                    date : "05月01日"
                },{
                    imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
                    text : "资深交互设计师",
                    title : "周姮",
                    date : "很久以前"
                },{
                    imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
                    text : "交互设计师",
                    title : "郝晓敏 (钰馨）",
                    date  : "很久以前"
                }],
        };
    }
    
    handleClick(e,item){
        console.log(e);
//        	location.hash="chatwindow";
        if(item.id ==1){
        	location.hash="chatpicwindow";
        }else if(item.id ==2){
        	location.hash="chatwindow";
        }
    }

    handleClickImg(event,imgUrl){
        console.log(event);
        console.log(imgUrl);
    }

    handleDelete(event,dataItem){

        console.log(event);
        console.log(dataItem);
    }

    render() {
    	let t = this;
        return (
            <div className="comlist">
	            <List
	                className="t-PT6 t-PB6"
		            layout="left"
		            hasRightIcon={false}
		            isDelete={false}
		            onDelete={this.handleDelete.bind(this)}
	            	demoTitle="&nbsp;&nbsp;聊天记录"
	            	onClick={t.handleClick.bind(t)}
		            data={t.state.data} />
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

module.exports = Comlist;
