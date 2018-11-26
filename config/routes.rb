Rails.application.routes.draw do
  devise_for :instructors
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'pages#home'

  get '/about', to: 'pages#about', as: 'about'
  get '/contact', to: 'pages#contact', as: 'contact'
  get '/join', to: 'pages#join', as: 'join'
  get '/timetable', to: 'lessons#index', as: 'lessons'

  resources :lessons, only: [:show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
