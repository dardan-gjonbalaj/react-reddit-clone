class CreateFrontpages < ActiveRecord::Migration[6.0]
  def change
    create_table :frontpages do |t|
      t.string :page

      t.timestamps
    end
  end
end
