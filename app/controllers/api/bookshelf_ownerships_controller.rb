class Api::BookshelfOwnershipsController < ApplicationController


  def create
    @bookshelfOwnership = BookshelfOwnership.new(bookshelf_params)
    if @bookshelfOwnership.save
        @bookshelf = Bookshelf.where(id: @bookshelfOwnership.book_id)
      render template: '/api/bookshelves/show'
    else
      render json @bookshelfOwnership.errors.full_messages, status: 422
    end

  end

  def destroy
    @bookshelfOwnership = BookshelfOwnership.find(params[:id])
    @bookshelfOwnership.destroy
    @bookshelf = Bookshelf.where(id: @bookshelfOwnership.book_id)
    render template: '/api/bookshelves/show'
  end


  def bookshelf_ownership_params
    params.require(:bookShelfOwnership).permit(:book_id, :bookshelf_id)
  end







end
