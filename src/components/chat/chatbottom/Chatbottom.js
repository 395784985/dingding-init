require('./Chatbottom.styl');
const { Grid, TextField, TextareaField, RadioField, SelectField, CheckboxField, DatetimeField, Gallery, TabBar, NavBar, Icon, Toast, Button, Scroller, Group } = SaltUI;


class Chatbottom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	message:'',
        };
    }
    
    handleChange(label, value){
        let t = this;
 	   t.setState({
 	       [label]: value
 	   }, () => {
 	       let disabled = false;
 	       for (let key in t.state) {
 	       	   if(key == label){
 	       		    console.log(t.state[key]);
 	       	   }
 	       }
 	   });
     }
    
    sendmessage(){
    	
    }

    render() {
    	let t = this;
    	return (
            <div className="chatbottom">
            	<div className="dp-fx">
            		<div className="t-FL btn-30 t-msg"><TextField  value={t.state.message} onChange={t.handleChange.bind(t, 'message')}/></div>
            		<div className="t-FR btn-20 t-P10"><Button type="minor" onClick={t.sendmessage.bind(t)} >发送</Button></div>
            	</div>
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

module.exports = Chatbottom;
