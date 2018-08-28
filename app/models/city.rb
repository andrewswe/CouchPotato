# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :text             not null
#  banner_url :text             not null
#

class City < ApplicationRecord
  before_validation :ensure_default_values
  has_many :hosts,
    class_name: 'User',
    foreign_key: :city_id,
    primary_key: :id
    
  def ensure_default_values
    self.image_url ||= 'default_city_img'
    self.banner_url ||= 'default_city_banner'
  end
end
