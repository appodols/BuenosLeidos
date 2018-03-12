@reviews.each do |review|
  json.set! review.id do
    json.partial! "api/reviews/review", review: review

    # json.authorname review.user.e_mail

  end

  # json.user_id review.user_id
  # json.book_id review.book_id
  # json.body review.body
  # json.rating review.rating
  # json.created_at review.created_at
  # json.updated_at review.updated_at
  # json.id review.id
end


# json.author do
#   json.extract! review.user :e_mail,
#
# end

# json.author do

# end



# @reviews.each do |review|
#   json.set! review.author.id do
#     json.partial( user partial)
#   end
# end

# @reviews = {
#   1: {
#     review
      #user
#   }
#   2: {
#     review
#   }
# }

#json.partial! "api/users/user", user: review.user
