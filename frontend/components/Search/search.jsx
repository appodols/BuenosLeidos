/*jshint esversion: 6 */
import React from 'react';
import SearchResult from './search_result';
class Search extends React.Component {
  constructor(props){
    super(props);
      this.state = {query: "", searched: true};
      this.update = this.update.bind(this);
  }

    update(){
      //set state with query
      if(this.state.query.length > 2){
        this.props.updateSearchQuery(this.state.query);
        this.setState({searched: true});
      }

    }

  render(){
    return(

    <div>
       {this.state.id ?
       <MyRatingContainer></MyRatingContainer>:
          null
        }
    </div>
  )


  }



}

export default Search;


//display form
//onChanged this goes to update and

  //display search result category
  //map over each book
  //put this in HTML/CSS that covers the whole thing
