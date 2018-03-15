class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :bookshelves, :user_id
  end
end
