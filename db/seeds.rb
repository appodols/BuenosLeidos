# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


book_list =  []
book_list << ['Thinking in Bets: Making Smarter Decisions When You Don\'t Have All the Facts','Annie Duke',
'https://images-na.ssl-images-amazon.com/images/I/41oQkVLDeUL._SY346_.jpg','Poker champion turned business consultant Annie Duke teaches
you how to get comfortable with uncertainty and make better decisions as a result.
In Super Bowl XLIX, Seahawks coach Pete Carroll made one of the most
controversial calls in football history: With 26 seconds
remaining, and trailing by four at the Patriots one-yard line, he called for a pass ']


book_list << ['The Storytelling Animal: How Stories Make Us Human', 'Jonathan Gottschall',
'https://images-na.ssl-images-amazon.com/images/I/41k5xjC1A8L._SX332_BO1,204,203,200_.jpg',
'Humans live in landscapes of make-believe. We spin fantasies. We devour novels, films, and plays.
Even sporting events and criminal trials unfold as narratives.
Yet the world of story has long remained an undiscovered and unmapped country.
It’s easy to say that humans are “wired” for story, but why?']

book_list << ['Educated: A Memoir','Tara Westover','https://images-na.ssl-images-amazon.com/images/I/41eliTRAsHL.jpg',
'Tara Westover was seventeen the first time she set foot in a classroom.
Born to survivalists in the mountains of Idaho, she prepared for the end
of the world by stockpiling home-canned peaches and sleeping with her “head-for-the-hills” bag.
In the summer she stewed herbs for her mother, a midwife and healer,
and in the winter she salvaged metal in her father’s junkyard.
']

book_list << ['Narconomics: How to Run a Drug Cartel','Tom Wainwright','https://images-na.ssl-images-amazon.com/images/I/51uosuSxuCL.jpg',
'How does a budding cartel boss succeed (and survive) in the 300 billion
illegal drug business? By learning from the best, of course.
From creating brand value to fine-tuning customer service,
the folks running cartels have been attentive students of the strategy
and tactics used by corporations such as Walmart, McDonald\'s, and Coca-Cola.']

book_list.each do |title, author, image_url, description|
  Book.create(title: title, author: author, image_url: image_url,
  description: description, average_rating: 0)
end




# ownership_list = []
# ownership_list << [2,7]
# ownership_list << [1,8]
# ownership_list << [1,13]
# ownership_list << [2,14]
# ownership_list << [3,15]
#
# ownership_list.each do |book_id, bookshelf_id|
#   BookshelfOwnership.create(book_id: book_id, bookshelf_id: bookshelf_id)
# end
