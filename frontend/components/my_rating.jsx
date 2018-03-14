/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class MyRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {buttonName: "",rating: 0};
    this.hasGivenReview = this.hasGivenReview.bind(this);
    this.updateButton = this.updateButton.bind(this);
    // this.buttonName = this.buttonName.bind(this);
    this.deleteUserReview = this.deleteUserReview.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
    this.onStarHoverOut = this.onStarHoverOut.bind(this);
  }


  componentDidMount(){
    this.updateButton(this.props);
  }

  onStarClick(nextValue, prevValue, name) {

    if(this.props.ownReview){
      const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue, id: this.props.ownReview.id};
      this.props.updateReview(review);
    }
    else {
      const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue};
      this.props.createReview(review);
    }
  }


  updateButton(props){
    let reviewed = this.props.hasReviewed(props.reviews,props.currentUser.id);
    if(reviewed){
      this.setState({buttonName: 'Clear Rating', rating: (props.ownReview ? props.ownReview.rating : 0), initialRating: (props.ownReview ? props.ownReview.rating : 0)});
    } else {
      this.setState({buttonName: 'Rate This Book', rating: 0, initialRating: 0});
    }

  }


  componentWillReceiveProps(nextProps) {
      this.updateButton(nextProps);
  }

  hasGivenReview(){
    let user_id = this.props.currentUser.id;
    let ids = [];
    var user_review_id;
    this.props.reviews.forEach(review=> {
      ids.push(review.user_id);
    });

    if(ids.includes (user_id)){
      return true;
    } else {
      return false;
    }

  }

   onStarHover(nextValue, prevValue, name){
     this.setState({rating: nextValue});
   }

   onStarHoverOut(nextValue, prevValue, name){
     this.setState({rating: this.state.initialRating});
   }

  deleteUserReview(e){
    this.props.deleteReview(this.props.userReviewId);
  }


    render (){
      if(this.state.name === 'Rate This Book'){
      return(
      <div className="rate-this-book-content">
        <span className='rate-this-book'>{this.state.buttonName}</span>
        <StarRatingComponent starCount={5}
        name={'book-rating'}
        onStarHover = {this.onStarHover}
        onStarHoverOut={this.onStarHoverOut}
        onStarClick={this.onStarClick.bind(this)}
        value={this.state.rating}
          ></StarRatingComponent>
      </div>
);

    } else {
      return(
      <div className="rate-this-book-content">
        <span className='delete-this-book' onClick={this.deleteUserReview}>
        {this.state.buttonName}</span>
      <StarRatingComponent
        className='book-show-review-stars'
        onStarHover = {this.onStarHover}
        onStarHoverOut={this.onStarHoverOut}
        starCount={5}
        name={'book-rating'}
        onStarClick={this.onStarClick.bind(this)}
        value={this.state.rating}
          ></StarRatingComponent>
    </div>
    );
    }

  }

}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default MyRating;

//return<span className='rate-this-book'>{this.props.hasReviewed ? 'My Rating' : 'Rate This Book'}</span>;
// return(<span className='rate-this-book' onClick={this.deleteUserReview()}>
//
// {this.buttonName()}</span>);
