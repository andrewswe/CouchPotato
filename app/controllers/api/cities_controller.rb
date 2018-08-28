class Api::CitiesController < ApplicationController

  def index
    if params[:search_string]
      query = "%" + params[:search_string] + "%"
      @cities = City.where("name LIKE ?", query)
    else
      @cities = City.all
    end
  end

  def show
    @city = City.find(params[:id])
  end
end
