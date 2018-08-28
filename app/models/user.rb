# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  main_img_url    :string           not null
#  session_token   :string           not null
#  hosting_status  :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :hosting_status, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token, :ensure_default_values
  before_validation :ensure_default_values
  attr_reader :password

  has_one :spot,
    class_name: "Spot",
    foreign_key: :owner_id,
    primary_key: :id

  belongs_to :city,
    class_name: 'City',
    foreign_key: :city_id,
    primary_key: :id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def ensure_default_values
    self.main_img_url = '/default/img'
    self.hosting_status = :false
  end

end
