class Review < ApplicationRecord
  validates :author_id, :book_id, :rating, presence: true

  belongs_to :book,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: :Book

end
