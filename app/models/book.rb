class Book < ApplicationRecord
  validates :author, :title, presence: true
  validates :title, uniqueness: { scope: :author }

  has_many :reviews,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: :Review

  has_many :bookshelf_ownerships,
  foreign_key: :book_id,
  primary_key: :id,
  class_name: :Book



end
