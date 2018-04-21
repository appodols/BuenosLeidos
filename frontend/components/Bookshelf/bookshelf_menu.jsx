/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';


class bookshelfMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {newBookShelf: ""};
}

render (){
  let bookshelves = this.props.bookshelves;
  let allBookShelves = this.props.allBookShelves;
  return(
    <div className='bookShelfMenu'>
      <Link to={`/bookshelves/all`} className="bookshelf-link">All ({allBookShelves[2]})</Link>
    {bookshelves.map((bookshelf) => {
      return <Link to={`/bookshelves/${bookshelf[1]}`} key={bookshelf[1]}className="bookshelf-link">{`${bookshelf[0]} (${bookshelf[2]})`}</Link>;
      })}
        <h2>Add a Shelf</h2>
    </div>
  );
}

}




export default bookshelfMenu;
