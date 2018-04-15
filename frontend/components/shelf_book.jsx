/*jshint esversion: 6 */
import React from 'react';



const ShelfBook = ({book, name}) => {
      return(
        <div className= "book-shelf-display">
          <ul className="bookShelf-book-list">
            <li><h2 id='bsb' className='bs-cover'>{book.cover}</h2></li>
            <li><h2 id='bsb' className='bs-title'>{book.title}</h2></li>
            <li><h2 id='bsb' className='bs-author'>{book.author}</h2></h2></li>
            <li><h2 id='bsb' className='bs-avg-rating'>{book.average_rating}</h2></li>
            <li><h2 id='bsb' className='bs-rating'>{book.rating}</h2></li>
            <li><h2 id='bsb' className='bs-shelves'>{name}</h2></li>
            <li><h2 id='bsb' className='bs-date-added'>{book.date}</h2></li>
          </ul>
        </div>
      );
    };


export default ShelfBook;
