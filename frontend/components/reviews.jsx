/*jshint esversion: 6 */
import React from 'react';
import ReviewItem from './review_item';

class Reviews extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // debugger
     this.props.fetchReviews(this.props.bookId);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.bookId !== nextProps.bookId){
      this.props.fetchReviews(nextProps.bookId);
    }
  }

    render (){
      // debugger
      return(
        <div className= "ReviewsContainer">
          <h2 className = "brownBackground">Community Reviews</h2>
          {this.props.reviews.map((review,id) => {
          return <ReviewItem key={id}review={review}></ReviewItem>;
        })}
        </div>
      );

    }

}

//  // this.props.reviews.map(review=>{
  //   return
  // })
  // <ReviewItem review={review}></ReviewItem>
export default Reviews;

//<div>content{this.props.bookId}</div>
