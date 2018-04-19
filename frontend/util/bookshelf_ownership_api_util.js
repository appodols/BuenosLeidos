/*jshint esversion: 6 */
export const createBookShelfOwnership = bookShelfOwnership => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookshelf_ownerships',
    data: {bookShelfOwnership: bookShelfOwnership}
  });
};


export const deleteBookshelfOwnership = bookShelfOwnership => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookshelf_ownerships/${bookShelfOwnership.book_id}`,
    data: {bookShelfOwnership: bookShelfOwnership}
  });
};
