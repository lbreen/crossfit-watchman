Instructor.destroy_all
Lesson.destroy_all

rob = Instructor.create(first_name: 'Robert', last_name: 'Small', qualification: 'Level 1 CrossFit Instructor')
claire = Instructor.create(first_name: 'Claire', last_name: 'Small', qualification: 'Level 1 CrossFit Instructor')

Lesson.create(
  title: "Workout of the Day",
  start_time: Time.new('2018', '10', '19', '16', '30'),
  end_time: Time.new('2018', '10', '19', '17', '30'),
  instructor: rob,
  description: 'One of our various daily CrossFit sessions'
  )

Lesson.create(
  title: "Workout of the Day",
  start_time: Time.new('2018', '10', '23', '12', '30'),
  end_time: Time.new('2018', '10', '23', '13', '30'),
  instructor: claire,
  description: 'One of our various daily CrossFit sessions'
  )

puts "DB successfully seeded"
