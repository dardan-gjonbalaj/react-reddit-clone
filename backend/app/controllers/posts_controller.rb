class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts.to_json
  end

  def create
    puts params[:payload][:id]
    post = Post.create(id: params[:payload][:permalink], post: params[:payload]) 
    render json: post
    end

  def show
    puts params
    post = Post.find_by_id(params[:id])
    render json: post
  end
  

end
