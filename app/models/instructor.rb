class Instructor < ApplicationRecord
  has_many :lessons, dependent: :destroy
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :qualification, presence: true

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end