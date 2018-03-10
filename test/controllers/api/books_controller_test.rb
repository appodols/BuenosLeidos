require 'test_helper'

class Api::BooksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_books_create_url
    assert_response :success
  end

  test "should get show" do
    get api_books_show_url
    assert_response :success
  end

end
