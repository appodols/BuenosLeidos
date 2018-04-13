/*jshint esversion: 6 */
/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    // this.state = {buttonName: "",rating: 0};
    // this.updateButton = this.updateButton.bind(this);
    // this.buttonName = this.buttonName.bind(this);
    // this.deleteUserReview = this.deleteUserReview.bind(this);
    // this.onStarClick = this.onStarClick.bind(this);
    // this.onStarHover = this.onStarHover.bind(this);
    // this.onStarHoverOut = this.onStarHoverOut.bind(this);
  }


  componentDidMount(){
    if(!this.props.currentBookShelf){
      this.props.fetchBookShelf();
    }
    // this.updateButton(this.props);
  }

  // onStarClick(nextValue, prevValue, name) {
  //
  //   if(this.props.ownReview){
  //     const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue, id: this.props.ownReview.id};
  //     this.props.updateReview(review);
  //   }
  //   else {
  //     const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue};
  //     this.props.createReview(review);
  //   }
  // }


  // updateButton(props){
  //   let reviewed = this.props.hasReviewed(props.reviews,props.currentUser.id);
  //   if(reviewed){
  //     this.setState({buttonName: 'Clear Rating', rating: (props.ownReview ? props.ownReview.rating : 0), initialRating: (props.ownReview ? props.ownReview.rating : 0)});
  //   } else {
  //     this.setState({buttonName: 'Rate This Book', rating: 0, initialRating: 0});
  //   }
  //
  // }


  componentWillReceiveProps(nextProps) {
    if(!this.props.currentBookShelf){
      this.props.fetchBookShelf();
    }
      // this.updateButton(nextProps);
  }


   // onStarHover(nextValue, prevValue, name){
   //   this.setState({rating: nextValue});
   // }
   //
   // onStarHoverOut(nextValue, prevValue, name){
   //   this.setState({rating: this.state.initialRating});
   // }
   //



    render (){
      return(

      <div className ='bookShelf'>
        {this.props.currentBookShelf ?
         <h2> yay we have stuff</h2>:
           <h2> no bookshelf here</h2>
         }
      </div>
    );
    }

}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default MyRating;
