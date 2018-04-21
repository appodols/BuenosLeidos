/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router-dom';

export const bookshelfMenu = ({bookshelves, allBookShelves}) => {
  return(
    <div className='bookShelfMenu'>
      <Link to={`/bookshelves/all`} className="bookshelf-link">All{allBookShelves[2]}</Link>
    {bookshelves.map((bookshelf) => {
      return <Link to={`/bookshelves/${bookshelf[1]}`}className="bookshelf-link">{bookshelf[0]}{bookshelf[2]}</Link>;
      })}
    </div>
  );
}
