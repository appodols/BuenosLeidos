/*jshint esversion: 6 */
export const createBookShelf = book => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookshelves',
    data: {book: book}
  });
};

export const fetchBookShelf = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookshelves/${id}`
  });
};


export const deleteBookShelf = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookshelves/${id}`
  });
};
