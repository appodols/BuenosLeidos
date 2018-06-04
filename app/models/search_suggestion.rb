class SearchSuggestion

  def self.seed
    Book.find_each do |book|
      title = book.title
      1.upto(book.length - 1) do |n|
        prefix = name[0, n]
        $redis.zadd 'search-suggestions:#{prefix.downcase}', book.id, book.downcase
      end

      author = book.author

      1.upto(author.length - 1) do |n|
        prefix = name[0, n]
        $redis.zadd 'search-suggestions:#{prefix.downcase}', book.id, book.downcase
      end
    end
  end

end
