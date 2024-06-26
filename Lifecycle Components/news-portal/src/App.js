import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      error: null
    };
  }

  handleSearch = (query) => {
    this.setState({ loading: true, error: null });
    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=463e32b1c9394f048f24d78466365381`)
      .then(response => {
        this.setState({ articles: response.data.articles, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  };

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div className="container">
        <h1 className="my-4">News Portal</h1>
        <SearchBar onSearch={this.handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <NewsList articles={articles} />
      </div>
    );
  }
}

export default App;
