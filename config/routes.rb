Rails.application.routes.draw do
  root to: 'pages#home'

  get '/about', to: 'pages#about', as: 'about'
  get '/contact', to: 'pages#contact', as: 'contact'
  get '/pricing', to: 'pages#pricing', as: 'pricing'
  get '/programme', to: 'lessons#index', as: 'lessons'

  resources :lessons, only: [:show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
