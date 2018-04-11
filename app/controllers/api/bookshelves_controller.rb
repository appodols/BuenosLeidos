class Api::BookshelvesController < ApplicationController


  def index
    # user_id = params[:bookshelves][:user_id]
    # temporarily is 1
    @bookshelves = Bookshelf.where(user_id: current_user.id)
    render :index
  end

  def show
      @bookshelf = Bookshelf.find(params[:id])
      render :show
  end

  def update
  end

  def create
  end

  def destroy
      @bookshelf = Bookshelf.find(params[:id])
      @bookshelf.destroy!
  end


  def bookshelves_params
    params.require(:bookshelves).permit(:user_id, :name, :default)
  end

end
