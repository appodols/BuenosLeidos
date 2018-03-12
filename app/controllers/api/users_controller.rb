class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render template: '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end


  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end


  def user_params
    params.require(:user).permit(:e_mail,:password, :name)
  end


end
