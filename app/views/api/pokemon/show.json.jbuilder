json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type, :items

# json.set! :items do
#   json.array! @pokemon.items, partial: 'api/shared/item', as: :item
# end
