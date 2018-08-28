class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.where("owner_id = ?", params[:owner_id]).first
  end

  def edit

  end

end
