class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
    @gym_location = {
      lat: '34.678782',
      lng: '32.840599'
    }
  end

  def pricing
  end

  def programme
  end
end
