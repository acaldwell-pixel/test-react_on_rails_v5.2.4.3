Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "pages#index"

  get "simple", to: "pages#simple"
  get "no-router", to: "pages#no_router"

  get "react-router(/*all)", to: "pages#index"

  resources :comments
end
