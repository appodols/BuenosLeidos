class AddConstraintsToReviews < ActiveRecord::Migration[5.1]
  def change
    change_column_null :reviews, :book_id, false
    change_column_null :reviews, :user_id, false
    change_column_null :reviews, :rating, false
  end
end
