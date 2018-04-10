class Bookshelf < ApplicationRecord
  validates :user_id, :name, :default, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  


end
