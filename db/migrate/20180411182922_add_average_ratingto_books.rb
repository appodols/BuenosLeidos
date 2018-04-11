class AddAverageRatingtoBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :average_rating, :float, :null => false, :default => 0
  end
end
