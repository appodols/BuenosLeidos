/*jshint esversion: 6 */
import { connect } from 'react-redux';
import ShelfBook from './shelf_book';
import { readStatus } from '../reducers/selectors';

const msp = (state,ownProps) =>{
    debugger
    return({
    name: ownProps.name,
    key: ownProps.key,
    book: ownProps.book,
    readStatus: readStatus(state, ownProps.book)
    }
  );
};

const mdp = (dispatch) => ({

});

export default connect (msp, null)(ShelfBook);
