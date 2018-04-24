/*jshint esversion: 6 */
import React from 'react';
import ShelfBookContainer from '../shelf_book_container';
import BookShelfMenuContainer from './bookshelf_menu_container';

const allBookShelves = ({allShelves}) => {
return(
  <div className ='bookShelf'>
    {allShelves ?
      <div className = 'bs-wrapper'>
        <header className='bs-header'></header>
             <div className='bookShelfContent'>
                 <div className= 'leftColumn'>
                   <BookShelfMenuContainer></BookShelfMenuContainer>
                 </div>
                 <div className= 'rightColumn'>
                    <ul className="bookShelf-header-list">
                      <li><h2 className='bsh-cover'>cover</h2></li>
                      <li><h2 className='bsh-title'>title</h2></li>
                      <li><h2 className='bsh-author'>author</h2></li>
                      <li><h2 className='bsh-avg-rating'>avg rating</h2></li>
                      <li><h2 className='bsh-rating'>rating</h2></li>
                      <li><h2 className='bsh-shelves'>shelves</h2></li>
                      <li><h2 className='bsh-date-added'>date added</h2></li>
                    </ul>
                    {allShelves.length > 0 ?
                    <div className='shelfBooks'>
                        {allShelves.map((book,id) => {
                      return <ShelfBookContainer name={book.shelf} key={id}book={book}></ShelfBookContainer>;
                        })}
                      </div>
                      :
                       <h2> no books</h2>}
                </div>
              </div>
            </div>
    :
       <h2> No bookshelves</h2>
     }
    </div>
  );
};



export default allBookShelves
