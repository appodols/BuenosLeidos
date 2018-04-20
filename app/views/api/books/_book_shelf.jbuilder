

 user_review = book.reviews.select{|review| review.user_id == current_user.id}.first
 user_rating, rating_id = 0, 0
 if(user_review)
   user_rating = user_review.rating.round(2)
   rating_id = user_review.id
 end

 average_rating = book.average_rating.round(2)


json.extract! book, :title, :author, :id, :image_url, :description, :created_at
json.rating user_rating
json.rating_id rating_id
json.average_rating average_rating
