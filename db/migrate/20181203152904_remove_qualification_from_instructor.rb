class RemoveQualificationFromInstructor < ActiveRecord::Migration[5.2]
  def change
    remove_column :instructors, :qualification
  end
end
