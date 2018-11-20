class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photoList: [
              {
                url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/user/avatar/16261/gitlab.gif',
                name: '111'
              },
              {
                url: 'http://aligitlab.oss-cn-hangzhou-zmf.aliyuncs.com/uploads/tingle-ui/tingle-photo-field/eed863a778315746f6f0bf736a3200fc/image.png',
                name: '222'
              },
              {
                url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
                name: '222'
              }
            ]
        }
    }

    onDelete(index) {
        let photoList = this.state.photoList.filter((item, i) => {return index != i}) || [];

        this.setState({
            photoList
        })
    }
    onChange(fieldData) {
        const value = [];

        if (fieldData.value && fieldData.value.length) {
          fieldData.value.forEach((url, i) => {
            value.push({
              url,
              name: i,
            });
          });
        }

        this.setState({
            photoList: [].concat(this.state.photoList, value)
        });
    }

    render() {
        return (
            <Group>
                <Group.List>
                    <PhotoField
                        label="图片"
                        photoList={this.state.photoList}
                        corpId={"dingd8e1123006514592"}
                        onChange={this.onChange.bind(this)}
                        onDelete={this.onDelete.bind(this)}
                        />
                </Group.List>
            </Group>
        );
    }
};
module.exports = Demo;