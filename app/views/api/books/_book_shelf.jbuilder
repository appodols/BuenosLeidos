

 user_review = book.reviews.select{|review| review.user_id == current_user.id}.first
 user_rating, rating_id = 0, 0
 if(user_review)
   user_rating = user_review.rating.round(2)
   rating_id = user_review.id
 end


json.extract! book, :title, :author, :id, :image_url, :description, :created_at, :average_rating
json.rating user_rating
json.rating_id rating_id
