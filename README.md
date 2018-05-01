[Link to the Live Version](https://buenosleidos.herokuapp.com/#/)

# BuenosLeidos

BuenosLeidos is a single page application inspired by the reading app GoodReads. It utilizes ruby and rails on the backend, while using JavaScript and react-redux on the front-end.

## Features

* Books

  1.  Books can be found through the book index, or any given bookshelf.
  2.  Each book's show page specifies its average rating, a short summary, and author information.  Reviews for each book can be found on the bottom of the show page.
* Reviews
  1.  Users can add full reviews
  2.  Users can edit their reviews
  3.  Users can also add just a numerical rating.
  4.  Users can also edit the numerical rating.
 
* Bookshelves
  1.  Upon creating an account, Users have 3 bookshelves:  1) Currently Reading, 2) Want to Read, and 3) Read.
  2.  Users can add / removebooks to these bookshelves
  3.  Users can edit ratings of a given book from their bookshelf
  4.  Users can effortlessly switch between looking at different bookshelves via a 'bookshelf-menu' component. 
  5.  Users can also create their own bookshelves.
  
## Technologies Used

### Backend

* Ruby on Rails (v5.1.4) for MVC Framework
* PostgreSQL (v0.18) database
* Custom authentication through BCrypt (v3.1.7)
* Jbuilder (v2.5) for serving appropriately shaped JSON

### Frontend

* React (v16.2.0) 
* AJAX 

## Future Updates

The highest priority features is a) search with autocorrect implemented by using a trie, b) followed by recommendations.  Many people appreciate books that expand their horizon, but it can be notoriously difficult to find find books that do without consulting external resources! Recommendations aims to solve this problem.
