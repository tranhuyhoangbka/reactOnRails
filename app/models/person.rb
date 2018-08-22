class Person < ApplicationRecord
  has_many :posts
  belongs_to :company
end
