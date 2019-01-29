import React, {Component} from 'react';

class SearchBox extends Component {
  render(){
    return (
      <div className='tc pa2'>
        <input onChange={this.props.searchChange} className='tc pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots'/>
      </div>

    );
  };
}

export default SearchBox;
