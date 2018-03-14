/*jshint esversion: 6 */

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review: review}
  });
};



export const fetchReview = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  });
};

  export const fetchReviews = book_id => {
    return $.ajax({
      method: 'GET',
      url: `/api/reviews`,
      data: {review: {book_id} }
    });
  };



export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {review: review}
  });
};


export const deleteReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  });
};
