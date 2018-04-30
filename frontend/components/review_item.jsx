/*jshint esversion: 6 */
import React from 'react';
import Stars from './stars';
import Date from './date';
import { Link } from 'react-router-dom';





const reviewItem = ({review}) => {
return(
    <div className = 'reviewItem'>
        <img className='user-picture'
          src="https://s.gr-assets.com/assets/nophoto/user/m_50x66-82093808bca726cb3249a493fbd3bd0f.png">
        </img>
      <div className="userReviewContent">

        <div className="user-review-header">
          <section className='left-review-header'>
          <span className="review-author">{review.authorname}</span>
          <span className="rated-it">rated it</span>
        <div className='book-show-edit-stars'>
          <Stars rating={review.rating}></Stars>
        <Link to={`/books/${review.book_id}/edit_review`} className="book-show-edit-review">Edit Review</Link>
        </div>
        </section>

          <Date styling="review-date" time={review.created_at}></Date>
        </div>
        <span className='reviewText'>
          {review.body}
        </span>
      </div>


    </div>
  );
};


export default reviewItem;
  // <Stars rating={props.review.rating}></Stars>
//{props.review.id}
//<span className="date"></span>
