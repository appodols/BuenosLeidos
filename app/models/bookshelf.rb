class Bookshelf < ApplicationRecord
  validates :user_id, :name, :default, presence: true
end
