const { Group, CheckboxField } = SaltUI;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getCheckboxFieldProps() {
        return {
            data: [
                {
                    checked: false,
                    text: (
                        <table className="demoTable">
                            <tbody>
                            <tr>
                                <td className="avatar-td">
                                    <img
                                        className="avatar"
                                        src="https://img.alicdn.com/tps/TB1vZnyJFXXXXX5XpXXXXXXXXXX-32-32.png"
                                    />
                                </td>
                                <td className="info-td">
                                    <div className="name">周姮</div>
                                    <div className="postName">资深交互设计师</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>),
                    disable: false,
                    value: '1',
                    slotText: '周姮'
                }, {
                    checked: false,
                    text: (
                        <table className="demoTable">
                            <tbody>
                            <tr>
                                <td className="avatar-td">
                                    <img
                                        className="avatar"
                                        src="https://img.alicdn.com/tps/TB1CmDsJFXXXXcxXpXXXXXXXXXX-32-32.png"
                                    />
                                </td>
                                <td className="info-td">
                                    <div className="name">李伟（孟则）</div>
                                    <div className="postName">资深交互设计师</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    ),
                    disable: true,
                    value: '2',
                    slotText: '李伟（孟则）'
                }
                , {
                    checked: false,
                    text: "我也好我也好我也好",
                    disable: false,
                    value: '3'
                }
                , {
                    checked: false,
                    text: "大家都好大家都好大家都好大家都好大家都好大家都好大家都好大家都好",
                    disable: false,
                    value: '4'
                }
            ],
            readOnly: false,
            placeholder: "请选择",
            maskCloseable: false,
            groupListFlag: true,
            onChange: function (data) {
                console.log(data);
            },
            groupListArgument: {
                lineIndent: 25,
                itemIndent: 45
            },
            label:"多选label",
            mode: 'slot',
            required: true
        };
    }

    render() {
        let CheckboxFieldProps = this.getCheckboxFieldProps();
        return (
            <div style={{height: 1000}}>
                <Group>
                    <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">多选选择器演示</Group.Head>
                    <Group.List>
                        <CheckboxField {...CheckboxFieldProps} />
                    </Group.List>
                </Group>
            </div>

        )
    }
}

ReactDOM.render(
  <Demo />, document.getElementById("App")
);
module.exports = Demo;