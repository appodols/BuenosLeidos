/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({allShelves}) => {
      return(
          <div className= 'home-page-container'>
            {allShelves.length > 0 ?
            <div className='inner-home-container'>
                {allShelves.map((book,id) => {
              return   <Link key={id} className='homepage-cover-link' to={`/books/show/${book.id}`}>
                    <img className='homepage-cover-img'
                      key={book.id}
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
