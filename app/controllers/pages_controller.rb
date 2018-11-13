class PagesController < ApplicationController
  skip_before_action :authenticate_instructor!, only: [:home, :about, :contact, :pricing ]

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

  def pricing
  end
end
