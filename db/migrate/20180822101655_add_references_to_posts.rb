class AddReferencesToPosts < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :person, foreign_key: true
  end
end
