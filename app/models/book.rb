class Book < ApplicationRecord
  validates :author, :title, presence: true
  validates :title, uniqueness: { scope: :author }
end
