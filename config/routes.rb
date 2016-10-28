Rails.application.routes.draw do
  get '/subjects' => 'subjects#subject'
  namespace :api do
    post '/subjects/:subject_id' => 'subjects#create'
  end
end
