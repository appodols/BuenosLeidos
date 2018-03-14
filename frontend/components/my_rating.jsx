/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';

class MyRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {buttonName: "",rating: 0};
    this.hasGivenReview = this.hasGivenReview.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.buttonName = this.buttonName.bind(this);
    this.deleteUserReview = this.deleteUserReview.bind(this);
  }


  componentDidMount(){
    this.updateButton(this.props.reviews);
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
      return(<span className='rate-this-book'>
      {this.buttonName()}</span>);

    } else {
      return(<span className='delete-this-book' onClick={this.deleteUserReview}>
      {this.buttonName()}</span>);
    }

  }

}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default MyRating;

//return<span className='rate-this-book'>{this.props.hasReviewed ? 'My Rating' : 'Rate This Book'}</span>;
// return(<span className='rate-this-book' onClick={this.deleteUserReview()}>
//
// {this.buttonName()}</span>);
