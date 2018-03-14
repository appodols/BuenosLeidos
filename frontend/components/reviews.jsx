/*jshint esversion: 6 */
import React from 'react';
import ReviewItem from './review_item';


const Reviews = (props) => {      // debugger
      return(
        <div className= "ReviewsContainer">
          <h2 className = "brownBackground">Community Reviews</h2>
          {props.reviews.map((review,id) => {
          return <ReviewItem key={id}review={review}></ReviewItem>;
        })}
        </div>
      );
    };

export default Reviews;
