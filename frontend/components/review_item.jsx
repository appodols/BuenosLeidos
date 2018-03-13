/*jshint esversion: 6 */
import React from 'react';
import Stars from './stars';
import Date from './date';








const reviewItem = ({review}) => {
return(
    <div className = 'reviewItem'>
        <img className='user-picture'
          src="https://s.gr-assets.com/assets/nophoto/user/m_50x66-82093808bca726cb3249a493fbd3bd0f.png">
        </img>




      <div className="userReviewContent">
        <div className="user-review-header">
          <span className="review-author">{review.authorname}</span>
          <span className="rated-it">rated it</span>
          <Stars rating={review.rating}></Stars>
          <Date time={review.created_at}></Date>
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
