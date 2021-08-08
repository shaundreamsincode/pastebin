class Api::V1::DocumentsController < ApplicationController
  def create
    puts "foo"
    # binding.pry
    # render json:  {users: ['John', 'Kate', 'Harry', 'Mary']}
  end
end
