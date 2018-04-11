class Api::ReviewsController < ApplicationController

  def index
    book_id = params[:review][:book_id]
    @reviews = Review.where(book_id: book_id)
    render :index
  end






  def create
    @review = Review.new(review_params)
    @review.update_average_rating({create: true})
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
    @review = Review.find(params[:id])
    review_diff = review_params[:rating] - @review.rating
    # @review.update_average_rating({update: true, diff: review_diff})
    if @review.update(review_params)
      render template: '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find(params[:id])
    # @review.update_average_rating({delete: true})
    # render_error_if_not_current_user(@review)
    @review.destroy
    render template: '/api/reviews/show'
  end



  private
  def review_params
    params.require(:review).permit(:user_id, :book_id, :body, :rating, :created_at, :updated_at)
  end

#note, this isn't getting the created at, will have to figure that out
end
