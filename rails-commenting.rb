# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) creating a new controller called BlogPostController wish is being inhereted  by the Applications controller. the deff index is creating a method
class BlogPostsController < ApplicationController
  def index
    # 2) this is a controller method which which displays all the blog posts. BlogPosts.all is an active record call to show all the posts and it is being asigned to an instance variable so it can be available to the view and display the content
    @posts = BlogPost.all
  end

  def show
    # 3)a controller method to displays a new page which refering to a particular post from the index page. 
    @post = BlogPost.find(params[:id])
  end

  # 4) this is the method that is going to display a form for creating a new post
  def new
  end

  def create
    # 5) this is a method that is going create a new post .creating an if else statment wich is saying if the blog post is valid redirect to the all_herbs path. and if it doesnt work redirect back to the form page. this also had a delete method which takes a specific post with (params[:id]) and deletes it if it passes the if statment, and redirects to blog post path
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6) this im not sure of
      redirect_to blog_post_path(@post)
    end
  end

  # 7) this is creating a method for the strong params 
  private
  def blog_post_params
    # 8)which is allowing only those params to be passed in while creating a new blog_post
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)this is the model BlogPost
class BlogPost < ApplicationRecord
  # 10)this is associating the model BlogPosts to another model called comments through associations. one BlogPost will have many comments.
  has_many :comments
end
