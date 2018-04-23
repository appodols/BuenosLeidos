/*jshint esversion: 6 */


export const averageRating = (state) => {
  let average_rating = 0;
  if(Object.values(state.reviews).length > 0){
    average_rating = Number((Object.values(state.reviews).map(review=>
   (review.rating)).reduce((acc,el)=>(acc+el))/(Object.values(state.reviews).length)).toFixed(2));
  }
return average_rating;
};

export const currentUserReviewId = (state) => {
  let currentUser = state.session.currentUser;
   const userReviewId =  Object.values(state.reviews).filter(review=>{
    return(
    review.user_id === currentUser.id);}).map(review=>(
      review.id))[0];
    return userReviewId;
};

//goes through all reviews, examines them to find review where the id of the user
//is the id of the current user, and then gives me the review ID of that review
export const ownReview = (state) => {
  let review_id = currentUserReviewId(state);
  return state.reviews[review_id];
};


export const has_reviewed = (state) => {
  return(
  !!currentUserReviewId(state));
};


export const bookshelfShow = (state, id) => {

  let bookshelves = state.bookshelves;
  return bookshelves[id];
};

// export const bookShelfName = (state) => {
//     if(!state.bookshelves) return "not found";
//     let bookshelves = Object.values(state.bookshelves);
//     let current_book = Object.values(state.books)[0];
//     // console.log(bookshelves.length);
//     if(current_book){
//       for(let i= 0; i < bookshelves.length; i++){
//         let bookshelf = bookshelves[i];
//         let books = Object.values(bookshelf.books);
//         for(let j = 0; j < books.length; j++ ){
//           if(books[j].id === current_book.id){
//             return bookshelf.name;
//           }
//         }
//       }
//     }
//   return "not found";
// };

export const bookShelfInfo = (state, book) => {
    let first_return = [['Read',0,false],['Want To Read',0, false],['Currently Reading',0,false]];
    if((!state.bookshelves) || Object.values(state.bookshelves).length == 0) return first_return;
    let second_return = [];
    let bookshelves = Object.values(state.bookshelves);
    let current_book = (Object.values(state.books)[0]) || book;
    if(current_book){
      for(let i= 0; i < bookshelves.length; i++){
        let bookshelf = bookshelves[i];
        let to_add = [bookshelf.name, bookshelf.id, 'Add'];
        let books = Object.values(bookshelf.books);
        for(let j = 0; j < books.length; j++ ){
          if(books[j].id === current_book.id){
            to_add[2] = 'Delete';
            break;
          }
        }
        second_return.push(to_add);
      }
    }
  debugger
  return second_return;
};


export const bookShelfInfoStatus = (state, book) => {
    let first_return = [['Read',0,false],['Want To Read',0, false],['Currently Reading',0,false]];
    if((!state.bookshelves) || Object.values(state.bookshelves).length == 0) return first_return;
    let second_return = [];
    let bookshelves = Object.values(state.bookshelves);
    let current_book = book;
    if(current_book){
      for(let i= 0; i < bookshelves.length; i++){
        let bookshelf = bookshelves[i];
        let to_add = [bookshelf.name, bookshelf.id, 'Add'];
        let books = Object.values(bookshelf.books);
        for(let j = 0; j < books.length; j++ ){
          if(books[j].id === current_book.id){
            to_add[2] = 'Delete';
            break;
          }
        }
        second_return.push(to_add);
      }
    }
  return second_return;
};


export const readStatus = (state) => {
  let to_return = {};
  let bookshelves = Object.values(state.bookshelves);
  bookshelves.forEach((bookshelf)=>{
    bookshelf.books.forEach((book)=>{
      if(!to_return[book.id]){
        to_return[book.id] = [];
      }
      to_return[book.id].push(bookshelf.title);
    });
  });
  return to_return;
};


export const bookShelfMenuInfo = (state) => {
  let to_return = [['All', null, 0]];
  let bookshelves = Object.values(state.bookshelves);
  bookshelves.forEach((bookshelf)=>{
    let bookshelfLength = bookshelf.books.length;
    to_return.push([bookshelf.name, bookshelf.id, bookshelfLength]);
    to_return[0][2] += bookshelfLength;
  });
  return to_return;
};

export const allShelves = (state) => {
  let to_return = [];
  let ids= [];
  let bookshelves = Object.values(state.bookshelves);
  bookshelves.forEach((bookshelf)=>{
    let books = bookshelf.books;
    books.forEach((book)=>{
        book.shelf = bookshelf.name;
        if(!ids.includes (book.id)){
          to_return.push(book);
          ids.push(book.id);
        }
    });
  });
  return to_return;
};
