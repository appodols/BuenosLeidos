/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class BookRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {rating: this.props.rating, initialRating: this.props.rating};
    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
    this.onStarHoverOut = this.onStarHoverOut.bind(this);
  }


  componentDidMount(){
  
    // this.updateButton(this.props);
  }

  onStarClick(nextValue, prevValue, name) {

    if(this.state.initialRating > 0){
      const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue, id: this.props.rating_id};
      this.props.updateReview(review).then(()=>{this.setState({rating: nextValue, initialRating: nextValue});});
    }
    else {
      const review = {user_id: this.props.currentUser.id, book_id: this.props.book.id, rating: nextValue};
        this.setState({rating: nextValue});
      this.props.createReview(review).then(()=>{this.setState({rating: nextValue, initialRating: nextValue});});
    }
  }



  componentWillReceiveProps(nextProps) {

  }


   onStarHover(nextValue, prevValue, name){
     this.setState({rating: nextValue});
   }

   onStarHoverOut(nextValue, prevValue, name){
     this.setState({rating: this.state.initialRating});
   }


    render (){

      return(
      <div className="rate-this-book-content">
        <StarRatingComponent starCount={5}
        className={this.props.styling}
        name={'book-rating'}
        onStarHover = {this.onStarHover}
        onStarHoverOut={this.onStarHoverOut}
        onStarClick={this.onStarClick.bind(this)}
        value={this.state.rating}
          ></StarRatingComponent>
    </div>
  );
  }
}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default BookRating;
