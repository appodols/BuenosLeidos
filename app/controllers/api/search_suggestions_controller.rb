class Api::SearchSuggestionsController < ApplicationController

  def index
    search_query = params[:searchSuggestion][:search_query]
    suggestions = SearchSuggestion.terms_for(search_query)
    @books = Book.where(id: suggestions)
    debugger
    render :index
  end


  def search_params
    params.require(:searchSuggestion).permit(:search_query)
  end



end