/*jshint esversion: 6 */
import React from 'react';
import SearchResult from './search_result';
class Search extends React.Component {
  constructor(props){
    super(props);
      this.state = {query: "", searched: false};
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateSearchResult = this.updateSearchResult.bind(this);
  }

    update(e){
        this.setState({query: e.target.value}, ()=>{
          if(this.state.query.length < 2){
              this.setState({searched: false});
            }
          if(this.state.query.length >= 2){
              this.props.updateSearchQuery(this.state.query);
              this.setState({searched: true});
          }
        });
      }


      updateSearchResult(id){
        this.props.updateSearchResult([this.state.query, id]);
      }





      
    handleSubmit(){
      //to be implemented in the future and lead to future search page
    }

  render(){
    return(
    <div className='searchResultContent'>
      <input type="text"
        className= "searchBox"
        value={this.state.query} onChange ={this.update}
        placeholder = 'Search Books'
        ></input>
         {this.state.searched ?
           <section className='searchResults'>
                  {this.props.searchResult.map((book,id) => {
                    return <SearchResult updateSearchResult={this.updateSearchResult} book={book}></SearchResult>;
                  })}
          </section>:
             null
            }
    </div>
  )


  }



}

export default Search;
