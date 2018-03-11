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
        <div key={this.state.id} className="bookContent">
          <section className ='bookVisuals'>
            <div className='cover'></div>


            <div className='reading-info'>

            </div>

          </section>

          <section className = 'bookText'>

          </section>


        </div>
      );

    }

}


export default Book;


/// {this.state.title}
// {this.state.author}
