/*jshint esversion: 6 */
import React from 'react';

class Book extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.book;
  }


  componentDidMount(){

    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id){
      this.props.fetchBook(nextProps.match.params.bookId);
    this.setState(nextProps.book);}
  }


    render (){
      return(
        <div key={this.state.id}>
          {this.state.title}
          {this.state.author}
        </div>
      );

    }

}


export default Book;
