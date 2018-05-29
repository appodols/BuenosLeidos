class Book < ApplicationRecord
  require "trie"
  #note figure out how to put this in a proper folder

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

  after_create :self.create_trie, inserts_into_trie


  def self.create_trie
    if !@@trie
        @@trie = Trie.new
    end
  end


  def inserts_into_trie
    title = self[:title]
    @@trie.insert[:title]
  end



end
