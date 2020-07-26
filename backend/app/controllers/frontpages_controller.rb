class FrontpagesController < ApplicationController

  def index
    frontpage = RestClient.get("https://www.reddit.com/.json?obey_over18=false;limit=30")
    render json: frontpage
  end

def show
  puts params
  subreddit = RestClient.get("https://www.reddit.com/r/#{params[:id]}.json?obey_over18=false;limit=30")
  render json: subreddit
end
  
end
