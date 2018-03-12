/*jshint esversion: 6 */
import React from 'react';
import Stars from './stars';


const reviewItem = ({review}) => {
return(
    <div className = 'reviewItem'>
      <img className="user-picture"></img>
      <div className="user-review-header">
        <span>{'Placeholder user'}</span>
      </div>
    </div>
  );
};


export default reviewItem;
  // <Stars rating={props.review.rating}></Stars>
//{props.review.id}
