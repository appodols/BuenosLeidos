namespace :search_suggestions do

  desc 'Generate search suggestions'
  task index: :environment do
    SearchSuggestion.seed
  end

end
