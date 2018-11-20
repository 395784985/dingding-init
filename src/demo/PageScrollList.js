const { ScrollList, Context } = SaltUI;

const Item = (props) => <div className="demo-item">-------------{`${props.index} ${props.name}`}-----------</div>;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataGetted: false,
      data: [],
      hasError: false,
      pageSize: 2,
      currentPage: 1,
      loading: false,
      refreshing: false,
    };

    this.fetchTimes = 1;
  }

  onRefresh() {
	console.log(111111);
    this.setState({ refreshing: true });
    let items = [{name:'王五'},{name:'赵六'}];
//    setTimeout(() => {
    this.setState({
        loading: false,
        refreshing: false,
        dataGetted: true,
        data: this.state.data.concat(items),
        currentPage: curr + 1,
        hasError: false,
      });
//    }, 2000);
//    this.setState({ refreshing: false });
  }

  onLoad() {
	console.log(222222);
    const curr = this.state.currentPage;
    var d = new Date();
    this.setState({ loading: true });
    let items = [{name:'张三' + d.getTime() },{name:'李四'}];
//    setTimeout(() => {
	    this.setState({
	          loading: false,
	          refreshing:false,
	          dataGetted: true,
	          data: items.concat(this.state.data),
	//          data: items,
	          currentPage: curr,
	          hasError: false,
	    });
//    }, 2000);
	    this.setState({ loading: false });
  }


  render() {
    return (<div >
      <div className="container" style={{height:220}}>
        <ScrollList
          className="scroll-list-demo tH64 t-H64" style={{height:200}} pageSize={this.state.pageSize}  scrollLoad={true} 
          dataGetted={this.state.dataGetted}
          data={this.state.data}
          hasError={this.state.hasError}
          refreshing={this.state.refreshing}
          loading={this.state.loading}
	      onRefresh={this.onRefresh.bind(this)}
          onLoad={this.onLoad.bind(this)}
         
        >
          <Item />
        </ScrollList>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Demo />, document.getElementById('App')
);

module.exports = Demo;