/*jshint esversion: 6 */
import React from 'react';
import ReviewsContainer from './reviews_container';
import MyRatingContainer from './my_rating_container';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import AddtoBookShelfContainer from './add_to_bookshelf_container';


class Book extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.book;
  }



  componentDidMount(){
    this.props.fetchBookShelves().then(()=>
      this.props.fetchBook(this.props.match.params.bookId));
  }

  componentWillReceiveProps(nextProps) {
      this.setState(nextProps.book);
    if (this.props.book.id != nextProps.book.id){
      this.props.fetchBookShelves().then(()=>
        this.props.fetchBook(nextProps.match.params.bookId));
    }

  }


    render (){
      return(
        <div className='bookContainer'>
          <div key={this.state.id} className="bookContent">
            <section className ='bookVisuals'>

              <img className='cover'
                src={this.state.image_url}>
              </img>

              <section className='currentlyReading'>
                <AddtoBookShelfContainer></AddtoBookShelfContainer>
              </section>
              <div className="myRating">
                <MyRatingContainer key={this.props.book.id}></MyRatingContainer>
             </div>

            </section>
            <section className = 'bookText'>
              <div className='reading-info'>
                <h1 className="title">{this.state.title}</h1>

                <section className="authorInfo">
                  <span className="by">by</span>
                  <span className="author">{this.state.author}</span>
                </section>

                <section className="ratingInfo">
                  <StarRatingComponent
                    name={'average'}
                    starCount={5}
                    value={Math.round(this.props.averageRating)}
                    className='average-rating-star'
                    ></StarRatingComponent>
                  <span className='average-rating-span'>{this.props.averageRating}</span>
                </section>

                <div className="space-2"></div>

                  <div className="description">
                  {this.state.description}
                    {this.props.ownReview ?
                       null:
                      <Link to={`/books/${this.props.book.id}/review`} className="submitReview">Add Review</Link>
                     }
                  </div>
                </div>




              </section>

          </div>

           <div className='reviews'>
             {this.state.id ?
              <ReviewsContainer bookId={this.state.id}></ReviewsContainer>:
                null
              }
            </div>


        </div>
      );

    }

}


export default Book;


/// {this.state.title}
// {this.state.author}
//// <h1 className="title">{this.state.title}</h1>


// <img className='cover'
//   src="https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/7/4/4/9200000083044478.jpg">
// </img>
//
//<b className="bold">Lorem ipsum dolor sit amet</b>
//  <span className='rate-this-book'>Rate This Book</span>




// {this.state.id ?
//  <MyRatingContainer></MyRatingContainer>:
//    null
//  }

//  <Link className= 'addaReview'to='/reviews/new'>Add a review</Link>
//    <Span className='average-rating-span'>{this.props.averageRating}</Span>

                //
                //
                // <div className="space-1"></div>
                // <b className="bold">Lorem ipsum dolor sit amet</b>
                //
                // <div className="space-2"></div>
//<span className="submitReview"> Add Review</span>
//<Link to={`abc`} className="submitReview">Add Review</Link>



// <div className="description">
// {this.state.description}
//   {this.props.ownReview ?
//      null:
//     <Link to={`/books/${this.props.book.id}/review`} className="submitReview">Add Review</Link>
//    }
// </div>

 // <button className='book-bs-selector'>Want to Read</button>
