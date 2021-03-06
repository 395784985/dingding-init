const { Component } = React;
const { SearchBar } = SaltUI;

class SearchBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({
      keyword,
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch}>
          <div>{`search result: ${this.state.keyword}`}</div>
        </SearchBar>
      </div>
    );
  }
}

ReactDOM.render(<SearchBarDemo />, document.getElementById("App"));
module.exports = SearchBarDemo;