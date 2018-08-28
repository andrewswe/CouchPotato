# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  city        :string           not null
#  description :text             not null
#  lat         :float            not null
#  long        :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id


  

end
