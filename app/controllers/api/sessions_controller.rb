class Api::SessionsController < ApplicationController



  def create
    username = session_params[:username]
    password = session_params[:password]
    @user = User.find_by_credentials(username,password)
    if @user
      login(@user)
      render template '/api/users/show'
      #not sure this is the appropriate place to redirect to
    else
      render json: {errors: ["Invalid credentials"]}, status: 422
  end


  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {errors: ["You need to be logged in to logout!"]}, status: 404
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end


end
