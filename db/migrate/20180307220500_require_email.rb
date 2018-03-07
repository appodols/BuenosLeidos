class RequireEmail < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:users, :e_mail, false)
  end
end
