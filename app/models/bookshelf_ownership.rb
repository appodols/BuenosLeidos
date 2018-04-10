class BookshelfOwnership < ApplicationRecord

  validates :book_id, :bookshelf_id, presence: true

  belongs_to :book,
  foreign_key: :book_id,
  primary_key: :id,
  class_name: :Book

  belongs_to :bookshelf,
  foreign_key: :bookshelf_id,
  primary_key: :id,
  class_name: :Bookshelf




end
