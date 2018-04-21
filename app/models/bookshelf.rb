class Bookshelf < ApplicationRecord
  validates :user_id, :name, presence: true
  validates :default, inclusion: { in: [ true, false ] }



  belongs_to :user
  has_many :bookshelf_ownerships, dependent: :destroy
  has_many :books, through: :bookshelf_ownerships



  # has_many :books,
  # through: :bookshelf_ownerships,
  # source: :book
   # has_many :books,
   # through: :bookshelf_ownerships,
   # source: :book


end
