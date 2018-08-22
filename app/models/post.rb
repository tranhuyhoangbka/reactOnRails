class Post < ApplicationRecord
  validates :title, :body, presence: true
  validates :title, length: {maximum: 20}
  validates :body, length: {maximum: 3000}

  belongs_to :person
end
