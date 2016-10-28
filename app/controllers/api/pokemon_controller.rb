class Api::PokemonController < ApplicationController
  def index
    sleep 3
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def create
    @pokemon = Pokemon.new(poket_man_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def poket_man_params
    params.require(:pokemon).permit(:defense, :attack, :name, :poke_type, :image_url, moves:[])
  end
end
