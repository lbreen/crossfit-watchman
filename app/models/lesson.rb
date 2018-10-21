class Lesson < ApplicationRecord
  belongs_to :instructor
  validates :title, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
