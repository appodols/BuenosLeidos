/*jshint esversion: 6 */
import React from 'react';


const months = {
 "01": 'Jan',
 "02": "Feb",
 "03": "Mar",
 "04": "Apr",
 "05": "May",
 "06": "Jun",
 "07": "Jul",
 "08": "Aug",
 "09": "Sep",
 "10": "Oct",
 "11": "Nov",
 "12": "Dec"};


 const date = ({time}) => {

  let year = time.slice(0,4);
  let month = months[time.slice(5,7)]
  let day = time.slice(8,10);
  let date = `${month} ${day}, ${year}`
   return(
     <span key={date} className={date}>{date}</span>
   );
 }


export default date;
