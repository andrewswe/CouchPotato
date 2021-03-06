class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def login(user)
    @user = user
    @user.reset_session_token
    session[:session_token] = @user.session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil 
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def require_login

  end
end
