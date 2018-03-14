/*jshint esversion: 6 */
import React from 'react';


class MyRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: 'My Rating'};
    this.hasGivenReview = this.hasGivenReview.bind(this);
  }


  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {

  }

  hasGivenReview(){
    let user_id = this.props.currentUser.id;
    let ids = [];
    this.props.reviews.forEach(review=> {
      ids.push(review.user_id);
    });

    if(ids.includes (user_id)){
      return true;
    } else {
      return false;
    }

  }

    render (){
      if(this.hasGivenReview()){
        return<span className='rate-this-book'>My Rating</span>;
      } else {
        return <span className='rate-this-book'>Rate This Book</span>;
      }

    }


  }



export default MyRating;
