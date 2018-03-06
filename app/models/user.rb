class User < ApplicationRecord
  validates :password_digest, :session_token, :username, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token


  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    user && is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64()
  end

  def is_password?(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token
    self.save!
    self.session_token
  end



end
