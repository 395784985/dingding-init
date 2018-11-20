require('./Pictext.styl');
const { Group, Avatar} = SaltUI;
const { HBox, VBox, Box } = SaltUI.Boxs;
class Pictext extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	piclist:[],
        };
    }

    render() {
    	let t = this;
        return (
            <div className="pictext t-PT14 t-PL14 t-PR14 t-PB2 t-MB14">
	            {
	            	t.state.piclist && t.state.piclist.length == 1 ? t.state.piclist.map((item, index) => {
	            		return(
	            			<div>
    							<VBox vAlign="start" >
			     	                <Box className="t-omit2 t-H30 t-LH30">
			     	                    {item.title}
			     	                </Box>
			     	               <Box className="t-LH30">
			     	                    {item.time}
			     	                </Box>
			     	               <Box>
			     	               		<img src={item.picsrc} className="wp-pic" />
			     	                </Box>
			     	                <Box className="wp-content t-omit3 t-LH20 t-PM12">
			     	                	{item.content}
			     	                </Box>
			     	               <Box className="t-LH30 t-MT12 t-MB4">
			     	                  查看全文
			     	                </Box>
			     	            </VBox>
		     	            </div>
            			)		
            		})
            		:
        			t.state.piclist.map((item, index) => {
	            		return(
	            			<div>
            				{
            					index < 1 ? (
        							<VBox vAlign="end" className="wp-pictext">
				     	                <Box className="wp-pictext-title t-omit t-P6 t-LH20">
				     	                    {item.title}
				     	                </Box>
				     	            </VBox>
            					):(
            						<HBox className="wp-pictext2 t-PT8 t-PB8">
				     	                <Box className="wp-pictext-left t-FL">
				         	                <VBox vAlign="center">
					            	                <Box className="t-omit2">
					            	                    {item.title}
					            	                </Box>
					            	            </VBox>
				     	                </Box>
				     	                <Box className="wp-pictext-right t-FR" flex={1}>
				     	                    <img src={item.picsrc} width={40} height={40} />
				     	                </Box>
				     	            </HBox>	
            					)
            				}
								 
            			</div>
            			)		
            		})
	            }
	            {
	            	/**
	            	t.state.piclist.map((item, index) => {
	            		return(
            			    <HBox className="wp-pictext2 t-PT8 t-PB8">
            	                <Box className="wp-pictext-left t-FL">
	            	                <VBox vAlign="center">
		            	                <Box className="t-omit2">
		            	                    {item.title}
		            	                </Box>
		            	            </VBox>
            	                </Box>
            	                <Box className="wp-pictext-right t-FR " flex={1}>
	        	                    <img src={item.picsrc} width={40} height={40} />
	        	                </Box>
            	            </HBox>
				        )
	            	})*/
	            }
				
            </div>
        );
    }

    componentWillMount() {
    	let t = this;
    	t.state.piclist = t.props.piclist;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    	
    	let t = this;
    	if(t.state.piclist !== nextProps.piclist){
    		return true;
    	}
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

module.exports = Pictext;
