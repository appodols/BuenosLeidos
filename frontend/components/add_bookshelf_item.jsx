/*jshint esversion: 6 */
import React from 'react';

class AddBookShelfItem extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(e){
    debugger
    if(this.props.name === 'delete'){
      let bookOwnership = [this.props.book.id, this.props.id];
      this.props.createBookShelfOwnership(bookOwnership);
    } else {
       this.props.removeBookShelfOwnership(this.props.id);
    }
  }



render(){
  return(
      <div key ={this.props.book.id} className = 'AddBookShelfItem'>
        <span className= 'selector-shelf-name'>{this.props.name}</span>
      <span onClick={this.onClick} className='selector-shelf-action'>{this.props.button}</span>
      </div>
    );
  }


}


export default AddBookShelfItem;
