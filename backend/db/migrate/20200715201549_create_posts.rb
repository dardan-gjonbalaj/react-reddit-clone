class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts, id: :string do |t|
     
      t.json :post

      t.timestamps
    end
  end
end
