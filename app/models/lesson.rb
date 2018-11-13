class Lesson < ApplicationRecord
  belongs_to :instructor
  validates :title, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true

  before_save :end_time_after_start_time?

  private

  def end_time_after_start_time?
    throw :abort if self.start_time > self.end_time
  end
end
