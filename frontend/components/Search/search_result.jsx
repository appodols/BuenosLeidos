/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';


const searchResult = ({book}) => {
return(
    <div className = 'searchResult'>
        <h2>{book.title}</h2>
    </div>
  );
};

export default searchResult;
