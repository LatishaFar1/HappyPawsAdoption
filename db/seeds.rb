# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


pets1 = Pet.create(name: "Dove", 
age: 1, 
image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
description: "Dove is a happy go lucky puppy that loves to go on long walks")

pets2 = Pet.create(name: "Spot",
age: 3,
image: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
description: "Spot is fully potty-trained and ready to join a high-energy household.")

pets3 = Pet.create(name: "Tom and Jerry", 
age: 1,
image: "https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",
description: "These two are a package deal. They go everywhere together and are happiest when they aren't around too many children.")

puts "seeded."