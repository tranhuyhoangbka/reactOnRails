# Load DSL and set up stages
require "capistrano/setup"

require "capistrano/deploy"

require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# require "capistrano/rvm"
require "capistrano/rbenv"
require 'capistrano/puma'
install_plugin Capistrano::Puma
# require "capistrano/chruby"
require "capistrano/bundler"
# require "capistrano/rails/assets"
require "capistrano/rails/migrations"
# require "capistrano/passenger"

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rb").each { |r| import r }
