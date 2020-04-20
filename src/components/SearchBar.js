import React from 'react';
import { navigate } from '@reach/router';


class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (this.state.term) {
      this.props.onSubmit(this.state.term);
    } else {
      this.props.popularSearch();
    }
    this.setState({ term: '' });
    navigate(`/`);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Movie Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} 
              placeholder="Enter a movie title...or a word to find in movie titles."
              
            />
          </div>
        </form>
      </div>
    ) 
  }
}

export default SearchBar;