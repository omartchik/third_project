Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles
  # get "restaurants" => "restaurants#index" # lister tous les articles
  # get "restaurants/:id" => "restaurants#show"# afficher un seul article
  # get "restaurants/new" => "restaurants#new"# formulaire de création d'un article
  # post "resturants" => "restaurants#create"#creation d'un article
  # get "restaurants/edit" => "restaurants#edit"# formulaire d'édition
  # patch "restaurants/:id" => "restaurants#update"# mise à jour de l'article
  # delete "restaurants/:id" => "restaurants#destroy"# suppression d'un article
end
