/*jshint esversion: 6 */
import React from 'react';

class AddBookShelfItem extends React.Component {
  constructor(props){
    super(props);

  }


render(){
  return(
      <div className = 'AddBookShelfItem'>
        <span className= 'selector-shelf-name'>{this.props.name}</span>
        <span className='selector-shelf-action'>{this.props.button}</span>
      </div>
    );
  }


}


export default AddBookShelfItem;
