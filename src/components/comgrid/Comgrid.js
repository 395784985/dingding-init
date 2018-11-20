require('./Comgrid.styl');
const { Grid, Icon, Avatar} = SaltUI;

class Comgrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		 icons: [{
                 text: '淘宝',
                 iconUrl: 'https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png',
                 route: 'https://m.taobao.com/'
             },{
                 text: '京东',
                 iconUrl: 'https://st.360buyimg.com/m/images/index/top-jdlogo.png',
                 route: 'https://m.jd.com/'
             },{
                 text: '天猫',
                 iconUrl: 'https://img.alicdn.com/tps/i4/TB1D4VmKFXXXXcRXVXXwu0bFXXX.png_640x640Q30s0.jpg_.webp',
                 route: 'https://jhs.m.taobao.com/m/index.htm'
             },{
                 text: '聚划算',
                 iconUrl: 'https://img.alicdn.com/tps/i4/TB1ONhvKFXXXXb_XFXXwu0bFXXX.png_640x640Q30s0.jpg_.webp',
                 route: 'https://jhs.m.taobao.com/m/index.htm'
             },{
                 text: '天猫超市',
                 iconUrl: 'https://img.alicdn.com/tps/TB1J.e2KVXXXXafXFXXXXXXXXXX-160-160.png_640x640Q30s0.jpg_.webp',
                 route: 'https://chaoshi.m.tmall.com/'
             },{
                 text: '充值中心',
                 iconUrl: 'https://img.alicdn.com/tps/i4/TB1nfRqKFXXXXXvXVXXwu0bFXXX.png_640x640Q30s0.jpg_.webp',
                 route: 'https://h5.m.taobao.com/app/cz/cost.html'
             },{
                 text: '积分乐园',
                 iconUrl: 'https://img.alicdn.com/tps/i4/TB1gWFLKFXXXXXLXXXXwu0bFXXX.png_640x640Q30s0.jpg_.webp',
                 route: 'https://www.tmall.com/'
             },{
                 text: '全球购',
                 iconUrl: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png',
                 route: 'https://jdw.jd.hk/?vs=m'
             },{
                 text: '物流查询',
                 iconUrl: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3199/169/1818813995/12570/62402b0d/57d54364Needc47cd.png',
                 route: 'http://m.kuaidi100.com/index.jsp'
             },{
                 text: '汽车',
                 iconUrl: 'https://gw.alicdn.com/tfs/TB170YjQFXXXXXraXXXXXXXXXXX-192-192.jpg_150x150Q90.jpg',
                 route: 'https://market.m.taobao.com/wh/tms/taobao/page/markets/paimai/carchannel'
             }],
        };
    }
    
    handleClick(options) {
        Toast.show(options);
    }

    handleRouter(item) {
    	if(item.text == "淘宝"){
    		location.hash = "goodslist"
    	}else{
    		location.href = item.route;
    	}
    }

    handleLink(link) {
        location.hash = link;
    }
    
    componentWillMount() {
    }

    render() {
    	let t = this;
        return (
            <div className="comgrid t-MT8 t-MB8">
	            <Grid square={true} col={5} className="">
		          {
		              t.state.icons.map((item, index) => {
		                  return (
		                      <div key={'icon' + index} className="t-FBV t-FBAC t-FBJC home-grid-item t-TE" onClick={t.handleRouter.bind(t, item)}>
		                          <div className="home-grid-icon">
		                            	  <Avatar src={item.iconUrl} width={50}  />
		                          </div>
		                          <div className="t-FC6 icon-text">{item.text}</div>
		                      </div>
		                  )
		              })
		          }
		         </Grid>
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

module.exports = Comgrid;
