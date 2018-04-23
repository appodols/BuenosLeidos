/*jshint esversion: 6 */
import React from 'react';
import AddBookShelfItemContainer  from '../add_bookshelf_item_container';

class ShelfStatus extends React.Component{
  constructor(props){
    super(props);
      this.state = {clicked: false};
      this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    this.setState({clicked: !this.state.clicked});
  }

  render(){
    if(this.state.clicked === false){
      return(
          <div className='bs-shelves'>
            <li><h2>{this.props.name}</h2></li>
          <button onClick={this.toggle} className='bs-status-button'>[edit]</button>
          </div>
        );
    } else {
      return(
        <div className='bs-shelves'>
            <li><h2>{this.props.name}</h2></li>
          <button onClick={this.toggle} className='bs-status-button'>[edit]</button>
            <div className= 'add-shelves-modal'>
              {this.props.bookShelfInfo.map((el, idx) => {
              return <AddBookShelfItemContainer key={idx} book={this.props.book} name={el[0]} id={el[1]} button={el[2]}></AddBookShelfItemContainer>;
              })}
            </div>
        </div>
        );
    }

  }

}

export default ShelfStatus;
