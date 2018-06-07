class Api::SearchSuggestionsController < ApplicationController

  def index
   debugger
   render json: SearchSuggestion.terms_for(params[:term])
  end


end



private
def search_params
  params.require(:search).permit(:search_query)
end
