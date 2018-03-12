class AddNameUsers < ActiveRecord::Migration[5.1]
  def change
     add_column :users, :name, :string, :null => false
     add_index :users, :name
  end
end
