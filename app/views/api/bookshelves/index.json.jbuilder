



  json.bookshelves @bookshelves.each do |bookshelf|
      json.partial! "api/bookshelves/bookshelf", bookshelf: bookshelf
      json.books bookshelf.books.each do |book|
        json.partial! "api/books/book_shelf", book: book
      end
  end




  # @bookshelves.each do |bookshelf|
  #   json.set! bookshelf.id do
  #     json.partial! "api/bookshelves/bookshelf", bookshelf: bookshelf
  #   end
  # end
