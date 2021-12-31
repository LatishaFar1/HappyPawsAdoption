class User < ApplicationRecord
    has_secure_password 
    validates :username, presence: true, length: {minimum: 5}
    has_many :favorites
    has_many :pets, :through => :favorites
end
