class RemoveInformationFromInstructor < ActiveRecord::Migration[5.2]
  def change
    remove_column :instructors, :qualification, :string
    remove_column :instructors, :about, :string
  end
end
