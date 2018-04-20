class Api::BookshelfOwnershipsController < ApplicationController


  def create
    @bookshelfOwnership = BookshelfOwnership.new(bookshelf_ownership_params)
    if @bookshelfOwnership.save
        @bookshelf = Bookshelf.where(id: @bookshelfOwnership.bookshelf_id).first
        render template: '/api/bookshelves/show'
    else
      render json @bookshelfOwnership.errors.full_messages, status: 422
    end

  end

  def destroy
    book_id = bookshelf_ownership_params[:book_id]
    bookshelf_id = bookshelf_ownership_params[:bookshelf_id]
    @bookshelfOwnership = BookshelfOwnership.where("book_id = ? AND bookshelf_id = ?", book_id, bookshelf_id).first
    @bookshelfOwnership.destroy
    @bookshelf = Bookshelf.where(id: bookshelf_id).first
    render template: '/api/bookshelves/show'
  end


  def bookshelf_ownership_params
    params.require(:bookShelfOwnership).permit(:book_id, :bookshelf_id)
  end






end
