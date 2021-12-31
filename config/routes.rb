Rails.application.routes.draw do

  get "/pets", to: "pets#index"
  get "/pets/:id", to: "pets#show"

  scope :api do 
    resources :favorites
    resources :pets, only: [:index, :show]
    resources :users
    
    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
