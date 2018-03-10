# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


book_list =  []
book_list << ['Thinking in Bets: Making Smarter Decisions When You Don\'t Have All the Facts','Annie Duke']
book_list << ['The Storytelling Animal: How Stories Make Us Human', 'Jonathan Gottschall']
book_list << ['Educated: A Memoir','Tara Westover']
book_list << ['Narconomics: How to Run a Drug Cartel','Tom Wainwright']
book_list.each{|title, author| Book.create(title: title, author: author)}
