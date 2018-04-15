/*jshint esversion: 6 */
import React from 'react';
import Date from './date';



const ShelfBook = ({book, name}) => {
      return(
          <ul className="bookShelf-book-list">
            <li><h2 className='bs-cover'>{book.cover}</h2></li>
            <li><h2 className='bs-title'>{book.title}</h2></li>
            <li><h2 className='bs-author'>{book.author}</h2></li>
            <li><h2 className='bs-avg-rating'>{book.average_rating}</h2></li>
            <li><h2 className='bs-rating'>{book.rating}</h2></li>
            <li><h2 className='bs-shelves'>{name}</h2></li>
            <li><Date id='bs-date-added'time={book.created_at}></Date></li>
          </ul>
      );
    };


export default ShelfBook;
