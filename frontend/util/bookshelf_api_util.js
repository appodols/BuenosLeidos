/*jshint esversion: 6 */
export const createBookShelf = bookShelf => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookshelves',
    data: {bookShelf: bookShelf}
  });
};

export const fetchBookShelf = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookshelves/${id}`
  });
};


export const fetchBookShelves = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookshelves`
  });
};


export const deleteBookShelf = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookshelves/${id}`
  });
};
