require('./Comsearch.styl');
const { Group, Avatar, SearchBar, List} = SaltUI;

class Comsearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	searchData: [{
                text : "赵旭东",
                title : "赵旭东",
            },{
                text : "李强",
                title : "李强",
            },{
                text : "赵详",
                title : "赵详",
            },{
                text : "伐木累",
                title : "family",
            },{
                text : "歪果仁",
                title : "美国人",
            },{
                text : "苹果",
                title : "Apple",
            },],
        };
    }
    
    handleClick(e, dataItem){
    	console.log(dataItem.id);
    }
    
    onSearch(value){
    	console.log("onSearch..." + value);
    }
    
    onExit(){
    	console.log("onExit...");
    }

    render() {
    	let t = this;
        return (
            <div className="comsearch">
	            <SearchBar onSearch={t.onSearch.bind(t)} className="comsearch1" onExit={t.onExit.bind(t)} placeholder='搜索页面'>
				    <div className="scroll-auto">
						 {t.state.searchData && t.state.searchData.length > 0 ? (<List layout="left" hasRightIcon={true} onClick={t.handleClick.bind(t)} data={t.state.searchData}/>) : ''}
					</div>
				</SearchBar>
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

module.exports = Comsearch;
