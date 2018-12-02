class LessonsController < ApplicationController
  skip_before_action :authenticate_instructor!, only: [:index]
  def index
    @lessons = Lesson.all
  end
end
