/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';


const searchResult = ({book}) => {
return(
    <div className = 'searchResult'>
      <Link to={`/books/show/${book.id}`}>
          <img className='bookshelf-cover'
            className = 'searchImage'
            src={book.image_url}>
          </img></Link>

    </div>
  );
};

export default searchResult;
