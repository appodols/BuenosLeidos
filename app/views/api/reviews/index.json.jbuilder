# # @reviews.each do |review|
# #   json.set! review.id do
# #     json.partial! 'bench', bench: bench
# #   end
# # end
# #
#
# json.array! @reviews, partial: 'posts/post', as: :review

json.array! @reviews do |review|
  json.user_id review.user_id
  json.book_id review.book_id
  json.body review.body
  json.rating review.rating
  json.created_at review.created_at
  json.updated_at review.updated_at
  json.id review.id
end



#
#
#
#   :book_id, :body, :rating, :created_at, :updated_at, :id
# end
