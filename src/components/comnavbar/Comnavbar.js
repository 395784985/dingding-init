require('./Comnavbar.styl');
const { Group, Avatar, NavBar, List} = SaltUI;

class Comnavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: '',
            title: '标题',
            rightText: '更多',
            isShow: true
        }
    }
    handleOnLeftClick(){
        alert('返回事件')
    }
    handleOnRightClick(){
        alert('更多事件')
    }
    handleCloseViewClick(){
        alert('关闭webView事件')
    }

    render() {
    	let t = this;
        return (
            <div className="comnavbar">
            	<NavBar className={this.state.className} title={this.state.title} isShow={this.state.isShow} onLeftClick={this.handleOnLeftClick.bind(this)}
            	onRightClick={this.handleOnRightClick.bind(this)} closeViewClick={this.handleCloseViewClick.bind(this)} />
            </div>
        );
    }

    componentWillMount() {
    	let t = this;
    	t.state.className = t.props.className;
    	t.state.title = t.props.title;
    	t.state.rightText = t.props.rightText;
    	t.state.isShow = t.props.isShow;
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

module.exports = Comnavbar;
