/*jshint esversion: 6 */


export const updateSearchQuery = searchQuery => {
  return $.ajax({
    method: 'GET',
    url: '/api/',
    data: {searchQuery: searchQuery}
  });
};
