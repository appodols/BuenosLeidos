/*jshint esversion: 6 */
import * as ApiUtils from '../util/search_api_util';
export const RECEIVE_SEARCH_QUERY = 'RECEIVE_SEARCH_QUERY';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';


export const updateSearchQuery = searchQuery => dispatch => {
  return(ApiUtils.updateSearchQuery(searchQuery).then(searchQuery => (
    dispatch(receiveSearchQuery(searchQuery))
  ), (error) => (
    dispatch(receiveSessionErrors(error.responseJSON))
  ))
 );
};

const receiveSearchQuery = searchQuery => {
  return({
    type: RECEIVE_SEARCH_QUERY,
    searchQuery: searchQuery
  });
};

export const receiveSearchErrors = (error) => ({
  type: RECEIVE_SESSION_ERRORS,
  error: error
});
