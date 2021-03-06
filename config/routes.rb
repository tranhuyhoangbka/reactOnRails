Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get 'hello_world', to: 'hello_world#index'
  root 'pages#home'
  resources :posts
  resources :people
  get '/travel' => 'hello_world#travel'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
