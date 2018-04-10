Rails.application.routes.draw do

  # namespace :api do
  #   get 'reviews/index'
  # end

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:create, :show]
    resources :reviews, except: [:new, :edit]
    resources :bookshelf_ownerships, only: [:create, :destroy]
    resources :bookshelves, except: [:new, :edit]
  end

end
