class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.text :image_url, null: false
      t.text :banner_url, null: false


    end

    add_index :cities, :name
  end
end
