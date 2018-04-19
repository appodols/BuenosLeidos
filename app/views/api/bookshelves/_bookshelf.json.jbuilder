# debugger
json.extract! bookshelf, :user_id, :name, :default, :id
json.books bookshelf.books.each do |book|
  json.partial! "api/books/book_shelf", book: book
end
