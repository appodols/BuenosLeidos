class AddIndexToTitles < ActiveRecord::Migration[5.1]
  def change
    add_index :books, [:title, :author], unique: true
  end
end
