/*jshint esversion: 6 */

export const createBook = book => {
  return $.ajax({
    method: 'POST',
    url: '/api/books',
    data: {book: book}
  });
};

export const fetchBook = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${id}`
  });
};


export const fetchBooks = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/books`
  });
};
