/*jshint esversion: 6 */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {
	withRouter
} from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);

		if(this.props.formType === 'update'){
			this.state = {rating: this.props.review.rating,
				initial_rating: this.props.review.rating,
				body: this.props.review.body};
			} else {
				this.state = {rating: 0, initial_rating: 0, body: ""};
			}


    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
    this.onStarHoverOut = this.onStarHoverOut.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }




  onStarHover(nextValue, prevValue, name){
    this.setState({rating: nextValue});
  }

  onStarHoverOut(nextValue, prevValue, name){
    this.setState({rating: this.state.initial_rating});
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }


  updateBody(e){
    this.setState({body: e.target.value});
  }

  submitReview(e){

    const review = {user_id: this.props.currentUserId,
      book_id: this.props.book.id,
      rating: this.state.rating,
      body: this.state.body};
	if(this.props.formKey=== 'update'){
		 this.props.updateReview(review);
	}	else {
		 this.props.createReview(review);
	}

   this.props.history.push(`/books/show/${this.props.book.id}`);
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
            onStarHover = {this.onStarHover}
            onStarClick={this.onStarClick}
          ></StarRatingComponent>
      </section>

    <label className='thoughts'>What Did You Think?</label>
    <textarea placeholder='Enter Your Review (optional)'className="reviewBody"
			value = {this.state.body}
      onChange={this.updateBody}
      ></textarea>
    <button
      className='save'
      onClick={this.submitReview}
      >Save</button>
    </div>

    );

  }


}
export default withRouter(ReviewForm);


//onStarHover = {this.onStarHover}
//onStarHoverOut={this.onStarHoverOut}
