/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';


class bookshelfMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {newBookShelf: ""};
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
}

  update(e){
    this.setState({newBookShelf: e.target.value});
  }


  submit(e){
    let bookshelf = {user_id: this.props.currentUserID, name: this.state.newBookShelf, default: false};
    this.props.createBookShelf(bookshelf);
  }


render (){
  let bookshelves = this.props.bookshelves;
  let allBookShelves = this.props.allBookShelves;
  return(
    <div className='bookShelfMenu'>
      <h2 className='bookshelfmenu-header'> Bookshelves</h2>
      <Link to={`/bookshelves/all`} className="bookshelf-link">All ({allBookShelves[2]})</Link>
    {bookshelves.map((bookshelf) => {
      return <Link to={`/bookshelves/${bookshelf[1]}`} key={bookshelf[1]}className="bookshelf-link">{`${bookshelf[0]} (${bookshelf[2]})`}</Link>;
      })}
        <form onSubmit={this.submit} className='add-shelf-form'>
          <h2 className='bs-add-shelf-label'>Add a shelf</h2>
          <div className='bs-inner-label'>
          <input type="text" className='add-shelf-form-input' placeholder='Create your shelf here...' onChange={this.update} value={this.state.newBookShelf}></input>
          <input className='add-shelf-button' type="submit" value='Add'></input>
        </div>
        </form>
    </div>
  );
}

}




export default bookshelfMenu;
