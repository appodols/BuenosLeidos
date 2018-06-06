/*jshint esversion: 6 */


export const search = searchQuery => {
  return $.ajax({
    method: 'GET',
    url: '/api/',
    data: {searchQuery: searchQuery}
  });
};
