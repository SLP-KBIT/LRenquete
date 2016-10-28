class CreateSubject1s < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
      t.time :run_time
      t.integer :subject_id
      t.string :teacher
      t.string :group
      t.string :student
      t.string :results
      t.string :advance_results

      t.timestamps
    end
  end
end
