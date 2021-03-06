class Api::SessionsController < ApplicationController


  def create
    e_mail = session_params[:e_mail]
    password = session_params[:password]
    @user = User.find_by_credentials(e_mail,password)
    if @user
      login(@user)
      render template: '/api/users/show'
      #not sure this is the appropriate place to redirect to
    else
      render json: ["Invalid credentials"], status: 401
    end
  end


  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["You need to be logged in to logout!"], status: 401
    end
  end

  private
  def session_params
    params.require(:user).permit(:e_mail, :password)
  end


end
