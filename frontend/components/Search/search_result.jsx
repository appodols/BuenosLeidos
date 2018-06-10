/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';


const searchResult = ({book}) => {
return(
    <div className = 'searchResult'>
      <div className= 'search-Image'>
        <Link to={`/books/show/${book.id}`}>
            <img className='bookshelf-cover'
              className = 'searchImage'
              src={book.image_url}>
            </img></Link>
       </div>

       <div className = 'searchContent'>
        <span className ='search-result-bookTitle'>
          <Link to={`/books/show/${book.id}`}>
              <h3 className ='search-title'> Title: {book.title}</h3>
          </Link>
        </span>

        <span className ='search-result-bookAuthor'>
          <Link to={`/books/show/${book.id}`}>
              <h3 className ='search-author'>Author: {book.author}</h3>
          </Link>
        </span>


       </div>

    </div>
  );
};

export default searchResult;





{/* <span className= 'search-result-bookAuthor'>
  {book.author}
</span> */}


//
