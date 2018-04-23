/*jshint esversion: 6 */
import React from 'react';
import Date from './date';
import BookRatingContainer from './book_rating_container';
import ShelfStatusContainer  from './Bookshelf/shelf_status_container';
import AddtoBookShelfContainer from './add_to_bookshelf_container';

const ShelfBook = ({book, name, readStatus}) => {
      return(
          <ul className="bookShelf-book-list">
            <li>  <img className='bookshelf-cover'
                src={book.image_url}>
              </img></li>
            <li><h2 className='bs-title'>{book.title}</h2></li>
            <li><h2 className='bs-author'>{book.author}</h2></li>
            <li><h2 className='bs-avg-rating'>{book.average_rating}</h2></li>
            <li className='bs-rating'><BookRatingContainer styling='bs-star' className='bs-stars' book={book} ></BookRatingContainer></li>
            <li><h2 className='bs-shelves'>{name}</h2></li>
            <li className='bookshelf-date-container'><Date  styling="bookShelf-date" className='bs-date-added'time={book.created_at}></Date></li>
            <li className='bs-add-to-bookshelf'><AddtoBookShelfContainer styling='bs' className='bs-add-to-bookshelf' book={book}></AddtoBookShelfContainer></li>
          </ul>
      );
    };


export default ShelfBook;


  // <li><h2 className='bs-rating'>{book.rating}</h2></li>
  //<li><h2 className='bs-shelves'>{name}</h2></li>
  //  <li className='bs-add-to-bookshelf'><AddtoBookShelfContainer book={book}></AddtoBookShelfContainer></li>
  //  <li className='bs-add-to-bookshelf'><AddtoBookShelfContainer styling='bs' className='bs-add-to-bookshelf' book={book}></AddtoBookShelfContainer></li>
