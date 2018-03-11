class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :book_id
      t.string :body
      t.integer :rating
      t.timestamps
    end
    add_index :reviews, :book_id
  end
end
