class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :title
      t.datetime :start_time
      t.datetime :end_time
      t.text :description
      t.references :instructor, foreign_key: true

      t.timestamps
    end
  end
end
