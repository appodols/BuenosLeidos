class Review < ApplicationRecord
  validates :user_id, :book_id, :rating, presence: true

  belongs_to :book,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: :Book

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  

end
