/*jshint esversion: 6 */
import React from 'react';

class AddBookShelfItem extends React.Component {
  constructor(props){
    super(props);

  }


  onClick(e){
    if(this.props.name === 'delete'){
      let bookOwnership = [this.props.book.id, this.props.id];
      this.props.createBookShelfOwnership(bookOwnership);
    } else {
       this.props.removeBookShelfOwnership(this.props.id);
    }
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
