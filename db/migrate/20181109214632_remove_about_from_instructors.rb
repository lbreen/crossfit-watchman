class RemoveAboutFromInstructors < ActiveRecord::Migration[5.2]
  def change
    remove_column :instructors, :city, :string
  end
end
