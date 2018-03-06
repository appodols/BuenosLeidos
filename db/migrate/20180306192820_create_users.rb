class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :e-mail

      t.timestamps
    end
  end
end
