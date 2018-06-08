/*jshint esversion: 6 */
import React from 'react';
import SearchResult from './search_result';
class Search extends React.Component {
  constructor(props){
    super(props);
      this.state = {query: "", searched: true};
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    update(){
      //set state with query
      if(this.state.query.length > 2){
        this.props.updateSearchQuery(this.state.query);
        this.setState({searched: true});
      }

    }
    handleSubmit(){
      //to be implemented in the future and lead to future search page
    }

  render(){
    debugger
    return(
    <div>
      <input type="text" className= "searchBox" value={this.state.query} onChange ={this.update}>
      </input>
    </div>
  )


  }



}

export default Search;

//
// {this.state.searched ?
//   {this.props.searchResult.map((el, idx) => {
//   return <SearchResult key={idx} book={this.props.book}></SearchResult>;
//   })}:
//    null
//  }


//display form
//onChanged this goes to update and

  //display search result category
  //map over each book
  //put this in HTML/CSS that covers the whole thing
  //we have a debugger--if we get the search results we need we'll map over them and build corresponding HTML/CSS
