
Types::CompanyType = GraphQL::ObjectType.define do
  name 'Company'
  # ...
  #     name  , type        , description (optional)
  field :id, !types.ID
  field :name, !types.String
  field :description, types.String
end
