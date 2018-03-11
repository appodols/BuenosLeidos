class Book < ApplicationRecord
  validates :author, :title, presence: true
  validates :title, uniqueness: { scope: :author }

  has_many :reviews,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: :Review



end
