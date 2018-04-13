/*jshint esversion: 6 */


export const averageRating = (state) => {
  let average_rating = 0;
  if(Object.values(state.reviews).length > 0){
    average_rating = Number((Object.values(state.reviews).map(review=>
   (review.rating)).reduce((acc,el)=>(acc+el))/(Object.values(state.reviews).length)).toFixed(2));
  }
return average_rating;
};


export const currentUserReviewId = (state) => {
  let currentUser = state.session.currentUser;
   const userReviewId =  Object.values(state.reviews).filter(review=>{
    return(
    review.user_id === currentUser.id);}).map(review=>(
      review.id))[0];
    return userReviewId;
};

//goes through all reviews, examines them to find review where the id of the user
//is the id of the current user, and then gives me the review ID of that review
export const ownReview = (state) => {
  let review_id = currentUserReviewId(state);
  return state.reviews[review_id];
};


export const has_reviewed = (state) => {
  return(
  !!currentUserReviewId(state));
};


export const bookshelf_show = (state, id) => {
  let bookshelves = state.bookshelves;
  
};
