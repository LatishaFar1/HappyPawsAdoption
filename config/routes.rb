Rails.application.routes.draw do

  

  scope :api do 
    resources :favorites
    resources :pets, only: [:index, :show, :create, :update, :destroy]
    resources :users
    
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

   
    post "/signup", to: "users#create"
  
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
