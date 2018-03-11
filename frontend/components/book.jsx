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

            <img className='cover'
              src={this.state.image_url}>
            </img>
          </section>



          <section className = 'bookText'>
            <div className='reading-info'>
              <h1 className="title">{this.state.title}</h1>

              <section className="authorInfo">
                <span className="by">by</span>
                <span className="author">{this.state.author}</span>
              </section>

              <section className="ratingInfo">
              </section>

              <div class="space-1"></div>
              <b className="bold">Lorem ipsum dolor sit amet</b>

              <div class="space-2"></div>
              </div>

              <span className="description">
                {this.state.description}
              </span>

          </section>


        </div>
      );

    }

}


export default Book;


/// {this.state.title}
// {this.state.author}
//// <h1 className="title">{this.state.title}</h1>


// <img className='cover'
//   src="https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/7/4/4/9200000083044478.jpg">
// </img>
//
//<b className="bold">Lorem ipsum dolor sit amet</b>
