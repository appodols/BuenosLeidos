class AddDefaultValuetoBookShelves < ActiveRecord::Migration[5.1]
  def change
     add_column :bookshelves, :default, :boolean, :null => false
  end

  
end
