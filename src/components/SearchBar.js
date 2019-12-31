import React from 'react';

class SearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value);

  }

  onInputClicked() {
    console.log('Input was clicked')
  }

  /*
    Note: for this.onInputChange we exlude the parenthesis, since we are only linking a reference to the onInputChange and not calling everytime the render() method is called, we only want onInputChange to be called when the text input field is changed, it will serve as a callback function.
  */
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              onClick={ this.onInputClicked }
              onChange={ this.onInputChange } /> 
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;