class PeopleController < ApplicationController
  layout "hello_world"

  def index
    render json: {people: Person.all.select(:name, :age)}
  end
end
