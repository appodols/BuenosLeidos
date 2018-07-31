class SearchSuggestion

  def self.seed
    Book.find_each do |book|
      title = book.title
      1.upto(title.length - 1) do |n|
        prefix = title[0, n].downcase
        $redis.zadd prefix, 1, book.id
      end

      author = book.author
      1.upto(author.length - 1) do |n|
        prefix = author[0, n].downcase
        $redis.zadd prefix, 1, book.id
      end
    end

  end #method


  def self.terms_for(prefix)
    $redis.zrevrange prefix, 0, 5
  end

  def self.generate_prefixes(prefix)
    prefixes = []
    (2..prefix.length).each do |i|
      prefixes.push(prefix[0..i])
    end
    prefixes
  end



  def self.increment(prefix, result)


    prefixes = generate_prefixes(prefix)
    prefixes.each do |prefix|
        $redis.ZINCRBY(prefix, "1", result)
    end

  end





end #class
