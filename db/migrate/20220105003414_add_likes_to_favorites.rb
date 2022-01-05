class AddLikesToFavorites < ActiveRecord::Migration[6.1]
  def change
    add_column :favorites, :likes, :integer, :default => 0
  end
end
