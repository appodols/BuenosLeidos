/*jshint esversion: 6 */
export const updateSearchQuery = search_query => {
  return $.ajax({
    method: 'GET',
    url: '/api/search_suggestions',
    data: {searchSuggestion: {search_query} }
  });
};

export const incrementSearchResult = update_info => {
  return $.ajax({
    method: 'POST',
    url: '/api/search_suggestions',
    data: {searchSuggestion: {update_info} }
  });
};
