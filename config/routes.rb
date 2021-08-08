Rails.application.routes.draw do
  resources :documents, only: [:create]

  namespace :api do
    namespace :v1 do
      get 'tests', to: 'tests#index'
    end
  end
end
4