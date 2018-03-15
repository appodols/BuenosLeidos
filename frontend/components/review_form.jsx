/*jshint esversion: 6 */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {rating: 0, initial_rating: 0, body: ""};
  
  }

  onStarHover(nextValue, prevValue, name){
    this.setState({rating: nextValue});
  }

  onStarHoverOut(nextValue, prevValue, name){
    this.setState({rating: this.state.initialRating});
  }





  render(){
    return(
    <div className='review-content'>
      <section className='bookInformation'>
        <img className='review-cover'
          src={this.props.book.image_url}>
        </img>

        <section className='author-title'>
          <span className='review-book-title'>{this.props.book.title}</span>
          <span className='author-inclusive'>
            <span className='by'>by</span>
            <span className='author'>{this.props.book.author}</span>
          </span>
        </section>

      </section>

      <section className='rating-review'>
        <label className='my-rating'> My Rating:</label>
          <StarRatingComponent
            name={'onCreateReview'}
            value={this.state.rating}
            starCount={5}
          ></StarRatingComponent>
      </section>

    <label className='thoughts'>What Did You Think?</label>
    <textarea placeholder='Enter Your Review (optional)'className="reviewBody"></textarea>
    <button className='save'>Save</button>
    </div>

    );

  }


}
export default ReviewForm;
