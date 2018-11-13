class Instructor < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # :registerable
  devise :database_authenticatable, :recoverable, :rememberable, :validatable
  has_many :lessons, dependent: :destroy
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :qualification, presence: true

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
