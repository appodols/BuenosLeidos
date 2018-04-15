/*jshint esversion: 6 */
import React from 'react';
import Date from './date';
import BookRatingContainer from './book_rating_container';


const ShelfBook = ({book, name}) => {
      return(
          <ul className="bookShelf-book-list">
            <li>  <img className='bookshelf-cover'
                src={book.image_url}>
              </img></li>
            <li><h2 className='bs-title'>{book.title}</h2></li>
            <li><h2 className='bs-author'>{book.author}</h2></li>
            <li><h2 className='bs-avg-rating'>{book.average_rating}</h2></li>
            <li className='bs-stars'><BookRatingContainer className='.bs-rating' book={book} ></BookRatingContainer></li>
            <li><h2 className='bs-shelves'>{name}</h2></li>
            <li className='bookshelf-date-container'><Date  styling="bookShelf-date" className='bs-date-added'time={book.created_at}></Date></li>
          </ul>
      );
    };


export default ShelfBook;


  // <li><h2 className='bs-rating'>{book.rating}</h2></li>
