Instructor.destroy_all

rob = Instructor.create!(email: 'robsmall@gmail.com', first_name: 'Robert', last_name: 'Small', password: '123456', admin: true)
claire = Instructor.create!(email: 'clairesmall@gmail.com', first_name: 'Claire', last_name: 'Small', password: '123456')
lee = Instructor.create!(email: 'leemaxwell@gmail.com', first_name: 'Lee', last_name: 'Maxwell', password: '123456')

puts "DB successfully seeded"
