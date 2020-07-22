class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts.to_json
  end

  def create
    puts params[:event][:id]
    
    post = Post.create(id: params[:event][:permalink], post: params[:event])
    
    render json: post
    end

  def show
  puts params
  post = Post.find_by_id(params[:id])
  render json: post
  end
  

end
