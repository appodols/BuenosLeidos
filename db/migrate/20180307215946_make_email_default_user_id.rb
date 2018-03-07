class MakeEmailDefaultUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    change_column_null :users, :e_mail, :string, false
  end
end
