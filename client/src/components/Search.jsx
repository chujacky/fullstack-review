import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }
  
  onEnter (e) {
    if (e.key === 'Enter') {
      this.search(e);
    }

  }
  search(e) {
    this.props.onSearch(this.state.term, e);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={(e) => {this.onChange(e)}} onKeyPress={this.onEnter}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;