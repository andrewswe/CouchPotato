class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.integer :owner_id, null: false
      t.string :city, null: false
      t.text :description, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.timestamps

    end
    add_index :spots, :owner_id, unique: true
    add_index :spots, :city
  end
end
