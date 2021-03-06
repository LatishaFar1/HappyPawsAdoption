class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :image
      t.string :description 
      t.integer :likes, :default => 0
      t.timestamps
    end
  end
end
