class User < ApplicationRecord
  validates :password_digest, :session_token, :e_mail, presence: true
  validates :e_mail, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_accessor :password
  after_initialize :ensure_session_token
  after_create :create_default_shelves


  def self.find_by_credentials(e_mail,password)
    user = User.find_by(e_mail: e_mail)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64()
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token
    self.save!
    self.session_token
  end

  def create_default_shelves
    Bookshelf.create(name: "Read", user_id: self.id, default: true)
    Bookshelf.create(name: "Want to Read", user_id: self.id, default: true)
    Bookshelf.create(name: "Currently Reading",user_id: self.id, default: true)
  end

end
