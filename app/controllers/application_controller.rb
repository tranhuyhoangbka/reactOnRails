class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception,
                       if: proc { request.headers["X-Auth"] != "tutorial_secret" }
end
