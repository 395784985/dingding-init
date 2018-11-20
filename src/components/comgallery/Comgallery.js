require('./Comgallery.styl');
const { Gallery} = SaltUI;
class Comgallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
    		 images: [
    			 {
 	                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1494131899&di=f6d4e40a186b59cb4494fc655a6b47bf&src=http://d.5857.com/ueigh_160605/001.jpg',
 	                name: '屌丝精英圈',
 	                href: 'http://www.diaosiquan.com'
 	            },
	            {
	                src: 'http://pic.qiantucdn.com/58pic/18/44/09/561fd7d3e9c82_1024.jpg',
	                name: 'IT知库',
	                href: 'http://www.it-api.com'
	            },
	            {
	                src: 'http://pic.qiantucdn.com/58pic/18/44/09/561fd8cb1f57e_1024.jpg',
	                name: '赵旭东博客',
	                href: 'http://drupal.it-api.com'
	            },
	            ]
	           
        };
    }
    

    render() {
    	let t = this;
        return (
            <div className="comgallery">
	            <Gallery className="gallery" onGalleryClick={(index, image) => {
	            	console.debug(index, image);
	            	location.href=image.href;
	            }}
	            	images={t.state.images}
		            showNav={true}
		        />
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

module.exports = Comgallery;
