class Api::ReviewsController < ApplicationController

  def create
    debugger
    @review = Review.new(review_params)
    if @review.save
      render template: '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def show
    @review = Review.find(params[:id])
    render :show
  end


  def render_error_if_not_current_user(review)
    if(review.user_id != currentUser.id)
      render json: ["Invalid credentials"], status: 422
    end
  end


  def update
    #this should be handeled in react
    @review = Review.find(params[:id])
    render_error_if_not_current_user(@review)
    if @review.update(review_params)
      render template: '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find(params[:id])
    render_error_if_not_current_user(@review)
    @review.destroy
  end



  private
  def review_params
    params.require(:review).permit(:user_id, :book_id, :body, :rating, :created_at, :updated_at)
  end

#note, this isn't getting the created at, will have to figure that out
end
