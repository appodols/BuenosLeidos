/*jshint esversion: 6 */
import React from 'react';


class ShelfStatus extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    debugger
    return(
        <li><h2 className='bs-shelves'>{this.props.name}</h2></li>
      );
    }




}

export default ShelfStatus;
