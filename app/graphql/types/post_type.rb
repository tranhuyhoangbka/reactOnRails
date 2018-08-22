Types::PostType = GraphQL::ObjectType.define do
  name 'Post'
  # ...
  #     name  , type        , description (optional)
  field :id, types.ID
  field :title, types.String, "The title of the Post"
  field :body, types.String
end
