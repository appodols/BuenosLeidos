class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author, null: false
      t.string :description
      t.string :genre
      t.string :title, null: false
      t.string :image_url
      t.timestamps
    end
  add_index :books, :author
  end
end
