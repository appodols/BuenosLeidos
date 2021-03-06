class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :body
      t.integer :rating, null: false
      t.timestamps
    end
  add_index :reviews, :book_id
  end
end
