# frozen_string_literal: true

class PostsController < ApplicationController
  layout "hello_world"
  before_action :load_post, only: [:update, :destroy]

  def index
    @post_props = { postList: Post.all.order(created_at: :desc).as_json(only: [:id, :title, :body]) }
  end

  def create
    post = Post.new post_params
    if post.save
      render json: post.as_json(only: %i(id title body)), status: :created, location: post
    else
      render json: post.errors.messages, status: :unprocessable_entity
    end
  end

  def update
    if @post.update post_params
      render json: {id: @post.id, title: @post.title, body: @post.body}, status: 200
    else
      render json: @post.errors.messages, status: 422
    end
  end

  def destroy
    @post.destroy
    render json: {head: :ok}
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def load_post
    @post = Post.find params[:id]
  end
end
