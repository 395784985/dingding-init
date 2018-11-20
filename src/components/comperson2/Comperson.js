require('./Comperson.styl');
const { Group, Avatar} = SaltUI;

class Comperson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="comperson">
	            <Group.Head className='t-demo-title'></Group.Head>
	            <Group.List>
	                <div className='t-P6'>
                        <div className="t-FL"><img src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={60} height={60} /></div>
                        <div className="t-FL t-ML12 t-LH40">
	                        <div className="t-LH30">
	                    		赵旭东
	                        </div>
                    		<div className="t-LH20">
	                    		你什么也没说....
	                        </div>
                        </div>
                        <div className="t-FR t-MR12 t-LH60">
                        	<img src="http://static.dingtalk.com/media/lADOAHO71M0BzM0BzA_460_460.jpg" width={20} height={20} />
                        </div>
                        <div className="t-CL">
                        </div>
                        {/**
                         <Avatar />
                        <Avatar src="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>
                        <span>你什么也没说...</span>
                        */}
	                </div>
	            </Group.List>
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

module.exports = Comperson;
