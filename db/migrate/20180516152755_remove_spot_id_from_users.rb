class RemoveSpotIdFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :spot_id, :integer
    add_column :users, :description, :text 
  end
end
