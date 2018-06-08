/*jshint esversion: 6 */
import { connect } from 'react-redux';
import Search from './search';
import {updateSearchQuery} from '../../actions/search_actions';
import {searchSelector} from '../../reducers/selectors';

const msp = (state) => {
  return({
    searchResult: searchSelector(state)
  });
};

const mdp = (dispatch) => {
  return({
    updateSearchQuery: (query) => dispatch(updateSearchQuery(query))
  });
};


export default connect (msp,mdp)(Search);
