class AddNamesToInstructors < ActiveRecord::Migration[5.2]
  def change
    add_column :instructors, :first_name, :string
    add_column :instructors, :last_name, :string
    add_column :instructors, :qualification, :string
    add_column :instructors, :about, :text
  end
end
