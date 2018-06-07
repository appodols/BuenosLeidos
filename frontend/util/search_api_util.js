/*jshint esversion: 6 */
export const updateSearchQuery = search_query => {
  return $.ajax({
    method: 'GET',
    url: '/api/search_suggestions',
    data: {searchSuggestion: {search_query} }
  });
};
