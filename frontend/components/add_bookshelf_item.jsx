/*jshint esversion: 6 */
import React from 'react';

class AddBookShelfItem extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(e){
    let bookOwnership = {book_id: this.props.book.id, bookshelf_id: this.props.id};
    if(this.props.button === 'Delete'){
      this.props.removeBookShelfOwnership(bookOwnership);
    } else {
        this.props.createBookShelfOwnership(bookOwnership);
    }
  }



render(){
  return(
      <div className = 'AddBookShelfItem'>
        <span className= 'selector-shelf-name'>{this.props.name}</span>
      <span onClick={this.onClick} className='selector-shelf-action'>{this.props.button}</span>
      </div>
    );
  }


}


export default AddBookShelfItem;
