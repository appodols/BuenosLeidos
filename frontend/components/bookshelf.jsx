
/*jshint esversion: 6 */
/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class BookShelf extends React.Component {
  constructor(props){
    super(props);

  }


  componentDidMount(){
    console.log('cdm');
    debugger
    if(!this.props.currentBookShelf){
      console.log('inside print cdm');
      this.props.fetchBookShelf(this.props.match.params.bookShelfId);
    }
    // this.updateButton(this.props);
  }



  componentWillReceiveProps(nextProps) {
    console.log('cwrp');
    debugger
    if(!nextProps.currentBookShelf){
      console.log('inside print cwrp');
      this.props.fetchBookShelf(nextProps.match.params.bookShelfId);
    }

  }


    render (){
      console.log('render');
      return(
      <div className ='bookShelf'>
        {this.props.currentBookShelf ?
          <div className = 'bs-wrapper'>
         <header className='bs-header'></header>
                 <div className='bookShelfContent'>
                     <div className= 'leftColumn'></div>
                     <div className= 'rightColumn'>
                        <ul className="bookShelf-header-list">
                          <li><h2 className='bs-cover'>cover</h2></li>
                          <li><h2 className='bs-title'>title</h2></li>
                          <li><h2 className='bs-author'>author</h2></li>
                          <li><h2 className='bs-avg-rating'>avg rating</h2></li>
                          <li><h2 className='bs-rating'>rating</h2></li>
                          <li><h2 className='bs-shelves'>shelves</h2></li>
                          <li><h2 className='bs-date-added'>date added</h2></li>
                        </ul>
                        {this.props.currentBookShelf.books.length > 0 ?
                        <div className='shelfBooks'>
                            {this.props.currentBookShelf.books.map((book,id) => {
                          return <ShelfBook name={this.props.currentBookShelf.name} key={id}book={book}></ShelfBook>;
                            })};
                          </div>
                          :
                           <h2> no books</h2>}
                    </div>
                  </div>
                </div>

        :
           <h2> No bookshelves</h2>
         }


      </div>
    );
    }

}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default BookShelf;







// <li><h2>cover</h2></li>
// <li><h2>title</h2></li>
// <li><h2>author</h2></li>
// <li><h2>avg Rating</h2></li>
// <li><h2>rating</h2></li>
// <li><h2>shelves</h2></li>
// <li><h2>date added</h2></li>
