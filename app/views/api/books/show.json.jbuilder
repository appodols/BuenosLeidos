json.partial! "api/books/book", book: @book

json.reviews @book.reviews do |review|
  json.partial! "api/reviews/review", review: review
end
