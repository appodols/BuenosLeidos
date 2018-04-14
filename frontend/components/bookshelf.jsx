
/*jshint esversion: 6 */
/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class BookShelf extends React.Component {
  constructor(props){
    super(props);

  }


  componentDidMount(){
    if(!this.props.currentBookShelf){
      this.props.fetchBookShelf();
    }
    // this.updateButton(this.props);
  }



  componentWillReceiveProps(nextProps) {
    if(!this.props.currentBookShelf){
      this.props.fetchBookShelf();
    }

  }




    render (){
      return(

      <div className ='bookShelf'>
        {this.props.currentBookShelf ?
        <div>
         <header className='bs-header'></header>
         <div className='bookShelfContent'>
           <div className= 'leftColumn'></div>
           <div className= 'rightColumn'></div>
         </div>
       </div>
        :
           null
         }
      </div>
    );
    }

}
//return<span className='rate-this-book'>{this.state.buttonName}</span>;
export default BookShelf;
