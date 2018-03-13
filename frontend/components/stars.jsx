/*jshint esversion: 6 */
import React from 'react';

const rating_to_stars = (rating) => {
  let arr = [];
  for(let i = 0; i < rating; i++){
    arr.push('full_star');
  }
  while(arr.length < 5){
    arr.push('empty_star');
  }

  return arr;
}


const stars  = ({rating}) => {
return(
    <div className = 'stars'>
      {rating_to_stars(rating).map((star,id) => {
        if(star ==='full_star'){
          return <span key={id} className="full_star">☆</span>;
        } else {
          return <span key={id} className="empty_star">☆</span>;;
        }




    })}
    </div>
  );
};


export default stars;
