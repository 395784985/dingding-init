require('./PageDemo.styl');

const reactMixin = require('react-mixin');

const Actions = require('./actions');
const Store = require('./store');

const { Group, Avatar, Toast, Button } = SaltUI;


const CookieUtil = require('../../common/util/cookie.js');

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            content: {},
            error: false
        };
        console.log(1);
        //test 钉
//        Basejs.ding('ding test ... ', function(data){
//        	alert(data);
//    	});
        //测试通讯录选人
//        Basejs.chooseEmpId(function(data){
//        	alert(JSON.stringify(data));
//        });
        console.log("set userid: 1234567890");
        CookieUtil.setCookie("userid", 'xxxx', 2);
        var userid = CookieUtil.getCookie("userid");
        console.log("get userid: " + userid);
//        CookieUtil.delCookie("userid");
//        console.log("del userid: " + CookieUtil.getCookie("userid"));
        
        var userid = CookieUtil.getCookie("userid");
		var userstr = "";
		if(!userid || userid.length == 0){
			userstr += "userid 不存在！";
		}else{
			userstr += "userid 已存在！";
		}
		console.log( userstr + "getCookie userid: " + userid);
    }

    componentDidMount() {
        console.log(3);
        this.handleClick('1234');
    }

    handleClick(workNo) {
        Toast.show({
            type: 'loading',
            content: 'Loading'
        });
       /* Actions.fetch({
            workNo: workNo
        }, function(data) {
            Toast.hide();
        });*/
    }

    handleBack() {
        salt.router.goBack();
    }
    

    render() {
        console.log(0);
        let t = this;
        console.log(t.state.content.list);
        return (
            <div className="page-demo">
                <Group>
                    <Group.Head>DEMO</Group.Head>
                    <Group.List lineIndent={15} itemIndent={15}>
                    {
                        t.state.content.list ?
                        t.state.content.list.map(function(item) {
                            return (
                                <div className="t-LH44 t-FBH t-FBAC" onClick={t.handleClick.bind(t, item.workNo)}>
                                    <Avatar size="32"/>
                                    <div className="t-FB1 t-PL10">
                                        {item.name}{item.nickName ? '(' + item.nickName + ')' : ''}
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="t-PL10 t-LH44 t-FBH t-FBAC t-FBJC">
                                {t.state.error ? 'Error' : 'No data'}
                            </div>
                        )
                    }
                    </Group.List>
                </Group>
            
                <div className="t-PL10 t-PR10 t-PT10">
                    <Button type="secondary" onClick={t.handleBack}></Button>
                </div>
            </div>
        );
    }
}

reactMixin.onClass(Page, Reflux.connect(Store));

module.exports = Page;
