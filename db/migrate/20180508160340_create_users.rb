class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :main_img_url, null: false
      t.string :session_token, null: false
      t.boolean :hosting_status, null: false
      t.integer :spot_id
      t.timestamps

    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :spot_id
  end
end
