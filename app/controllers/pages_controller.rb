class PagesController < ApplicationController
  def home
  end

  def about
    @instructors = Instructor.all
  end

  def contact
    @gym_location = {
      lat: '34.678782',
      lng: '32.840599'
    }
  end

  def join
  end
end
