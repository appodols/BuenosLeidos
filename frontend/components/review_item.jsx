/*jshint esversion: 6 */
import React from 'react';
import Stars from './stars';


const reviewItem = ({review}) => {
return(
    <div className = 'reviewItem'>
      <img className="user-picture"></img>
      <div className="user-review-header">
        <span className="author">{review.authorname}</span>
        <span className="rated-it">rated it</span>
        <Stars rating={review.rating}></Stars>
      </div>
    </div>
  );
};


export default reviewItem;
  // <Stars rating={props.review.rating}></Stars>
//{props.review.id}
