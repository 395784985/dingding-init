const { Tab } = SaltUI;

ReactDOM.render(
  <Tab active={1}>
    <Tab.Item title="已完成">

    </Tab.Item>
    <Tab.Item title="未完成">

    </Tab.Item>
    <Tab.Item title="通过">

    </Tab.Item>

  </Tab>, document.getElementById("App")
);
