# module Types
#   class PersonType < Types::BaseObject
#     description 'A person'

#     field :id, ID, null: false
#     field :name, String, null: false
#     field :age, Int, null: false, description: 'this is age of user'
#     field :posts do
#       type [Types::PostType]
#       resolve -> (obj, args, ctx) {
#         obj.posts
#       }
#     end
#   end
# end

Types::PersonType = GraphQL::ObjectType.define do
  name 'Person'
  # ...
  #     name  , type        , description (optional)
  field :id, types.ID
  field :name, types.String
  field :age, types.Int

  field :posts, types[Types::PostType] do
    # type types[Types::PostType]
    resolve -> (obj, args, ctx) {
      obj.posts
    }
  end

  field :company, Types::CompanyType do
    resolve -> (obj, args, ctx) {
      obj.company
    }
  end
end
