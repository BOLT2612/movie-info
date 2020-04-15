import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.props.onSubmit(this.state.term);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Movie Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
          
        </form>
      </div>
    ) 
  }
}

export default SearchBar;