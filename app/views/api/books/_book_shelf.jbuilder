

 user_review = book.reviews.select{|review| review.user_id == current_user.id}.first
 user_rating = 0
 if(user_review)
   user_rating = user_review.rating
 end


json.extract! book, :title, :author, :id, :image_url, :description, :created_at, :average_rating
json.rating user_rating
