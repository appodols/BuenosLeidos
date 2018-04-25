/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({allShelves}) => {
    debugger
      return(
          <div className= 'home-page-container'>
            {allShelves.length > 0 ?
            <div className='shelfBooks'>
                {allShelves.map((book,id) => {
              return   <Link  to={`/books/show/${book.id}`}>
                    <img className='bookshelf-cover'
                      src={book.image_url}>
                    </img></Link>;
                })}
              </div>
              :
               null}

         </div>);
    };


// <Link className= 'addaReview'to='/reviews/new'>Add a review</Link>

export default Home;
