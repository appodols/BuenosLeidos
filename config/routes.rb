Rails.application.routes.draw do

  namespace :api do
    get 'books/show'
  end


  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:create, :show]
    resource :reviews, only: [:create, :show, :destroy, :update]
  end
end
