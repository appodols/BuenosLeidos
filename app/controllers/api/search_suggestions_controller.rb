class Api::SearchSuggestionsController < ApplicationController

  def index
    search_query = params[:searchSuggestion][:search_query]
    suggestions = SearchSuggestion.terms_for(search_query)
    @books = Book.where(id: suggestions)
    render :index
  end

  def update
    update = params[:searchSuggestion][:update_info]
    #note in this object update is a tuple containing ['prefix','id'']
    SearchSuggestion.increment(update[0],update[1])
  end



  def search_params
    params.require(:searchSuggestion).permit(:search_query, :update_info)
  end



end
