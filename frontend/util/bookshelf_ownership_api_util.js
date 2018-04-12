/*jshint esversion: 6 */
export const createBookShelfOwnership = bookShelfOwnership => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookshelf_ownerships',
    data: {bookShelfOwnership: bookShelf}
  });
};


export const deleteBookshelfOwnership = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookshelf_ownerships/${id}`
  });
};
