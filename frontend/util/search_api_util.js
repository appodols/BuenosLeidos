/*jshint esversion: 6 */
export const updateSearchQuery = search_query => {
  return $.ajax({
    method: 'GET',
    url: '/api/search_suggestions',
    data: {searchSuggestion: {search_query} }
  });
};

export const updateSearchResult = update_info => {
  return $.ajax({
    method: 'POST',
    url: '/api/search_suggestions',
    data: {searchSuggestion: {update_info} }
  });
};
