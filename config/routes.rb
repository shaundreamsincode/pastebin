Rails.application.routes.draw do
  resources :documents, only: [:create, :show]

  namespace :api do
    namespace :v1 do
      resources :documents, only: [:index, :create]
      get 'tests', to: 'tests#index'
    end
  end
end
