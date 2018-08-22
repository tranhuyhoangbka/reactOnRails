# module Types
#   class QueryType < Types::BaseObject
#     # Add root-level fields here.
#     # They will be entry points for queries on your schema.

#     # TODO: remove me
#     field :person, Types::PersonType, null: true do
#       description 'find a person'
#       argument :id, ID, required: true
#     end

#     def person(id:)
#       Person.find(id)
#     end
#   end
# end

Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.
  field :people, !types[Types::PersonType] do
    argument :limit, types.Int, default_value: 20, prepare: ->(limit) {[limit, 30].min}
    resolve ->(obj, args, ctx) {
      Person.all.limit(args[:limit]).order(id: :desc)
    }
  end

  # field :movie do
  #   type Types::MovieType
  #   description “Return a movie”
  #   argument :id, !types.ID
  #   resolve -> (obj, args, ctx) { Movie.find(args[:id]) }
  # end
end
