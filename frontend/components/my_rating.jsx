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
    this.buttonName = this.buttonName.bind(this);
    this.deleteUserReview = this.deleteUserReview.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }


  componentDidMount(){
    this.updateButton(this.props.reviews);
  }

  onStarClick(nextValue, prevValue, name) {
    if(this.props.ownReview){
      //handle logic updating review
    }
    else {
      const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue};
      this.props.createReview(review);
    }
  }





  updateButton(reviews){
    if(this.props.hasReviewed){
      this.setState({buttonName: 'My Rating'});
    } else {
      this.setState({buttonName: 'Rate This Book'});
    }

  }


  componentWillReceiveProps(nextProps) {
    if(this.props.hasReviewed !== nextProps.hasReviewed){
      this.updateButton(nextProps.reviews);
    }
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

  buttonName(){
    if(this.props.hasReviewed){
      return 'Clear Rating';
    } else {
      return 'Rate This Book';
    }
  }

  deleteUserReview(e){
    this.props.deleteReview(this.props.userReviewId);
  }


    render (){
      if(this.buttonName()=== 'Rate This Book'){
      return(
      <div className="rate-this-book-content">
        <span className='rate-this-book'>{this.buttonName()}</span>
        <StarRatingComponent starCount={5}
        name={'book-rating'}
        onStarClick={this.onStarClick.bind(this)}
        value={0}
          ></StarRatingComponent>
      </div>
);

    } else {
      return(
      <div className="rate-this-book-content">
        <span className='delete-this-book' onClick={this.deleteUserReview}>
        {this.buttonName()}</span>
      <StarRatingComponent
        className='book-show-review-stars'
        starCount={5}
        name={'book-rating'}
        onStarClick={this.onStarClick.bind(this)}
        value={this.props.ownReview ? this.props.ownReview.rating : 0}
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
