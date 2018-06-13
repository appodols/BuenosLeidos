/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Search from './search';
import {updateSearchQuery, updateSearchResult} from '../../actions/search_actions';
import {searchSelector} from '../../reducers/selectors';

const msp = (state) => {
  return({
    searchResult: searchSelector(state)
  });
};

const mdp = (dispatch) => {
  return({
    updateSearchQuery: (query) => dispatch(updateSearchQuery(query)),
    updateSearchResult: (updateInfo) => updateSearchResult(updateInfo)
  });
};


export default connect (msp,mdp)(Search);
