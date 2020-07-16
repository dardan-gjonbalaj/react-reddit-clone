class FrontpagesController < ApplicationController

  def index
    frontpage = RestClient.get("https://www.reddit.com/.json")
    render json: frontpage
  end

def show
  puts params
  subreddit = RestClient.get("https://www.reddit.com/r/#{params[:id]}.json")
  render json: subreddit
end
  
end
