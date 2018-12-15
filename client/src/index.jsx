import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method:'GET',
      success: (data) => {
        this.setState({
          repos:data
        })
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: 'http://localhost:1128/repos',
      method:'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: term}),
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));