# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Spot.destroy_all
City.destroy_all

City1 = City.create!(
  name: "New York",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

City2 = City.create!(
  name: "Los Angeles",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

City3 = City.create!(
  name: "San Francisco",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

City4 = City.create!(
  name: "DC",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

City5 = City.create!(
  name: "Rome",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

City6 = City.create!(
  name: "Paris",
  image_url: 'default_city_img',
  banner_url: 'default_city_banner'
);

Cities = [City1.id, City2.id, City3.id, City4.id, City5.id, City6.id]

user1 = User.create!(
  email: 'andrew@yahoo.com',
  username: 'Andrew',
  password: 'andrewswe',
  description: 'I like eggs',
  city_id: City1.id
)

user2 = User.create!(
  email: 'john@yahoo.com',
  username: 'Mary',
  password: 'andrewswe',
  description: '4th year living in the city',
  city_id: City1.id
)

user3 = User.create!(
  email: 'peter@yahoo.com',
  username: 'Bobert',
  password: 'andrewswe',
  description: 'I live in LA',
  city_id: City2.id
)

user4 = User.create!(
  email: 'drew@yahoo.com',
  username: 'Felicia',
  password: 'andrewswe',
  description: 'I live in SF',
  city_id: City3.id
)

user5 = User.create!(
  email: 'rodd@yahoo.com',
  username: 'Rodd',
  password: 'andrewswe',
  description: 'I like rockets',
  city_id: Cities.sample
)

user6 = User.create!(
  email: 'hithere@yahoo.com',
  username: 'WhiteAndrew',
  password: 'andrewswe',
  description: 'I like redbull',
  city_id: Cities.sample
)

user7 = User.create!(
  email: 'hello@yahoo.com',
  username: 'Georgina',
  password: 'andrewswe',
  description: 'I need to get out of here',
  city_id: Cities.sample
)

user8 = User.create!(
  email: 'lola@yahoo.com',
  username: 'Lola',
  password: 'andrewswe',
  description: 'I hate stinky feet',
  city_id: Cities.sample
)

user9 = User.create!(
  email: 'ostrich@yahoo.com',
  username: 'Ostrich',
  password: 'andrewswe',
  description: 'I am from Austria',
  city_id: Cities.sample
)

user10 = User.create!(
  email: 'mac@yahoo.com',
  username: 'Dave',
  password: 'andrewswe',
  description: 'I have 2 friends.',
  city_id: Cities.sample
)

User.create!(
  email: 'sam@yahoo.com',
  username: 'Samantha',
  password: 'andrewswe',
  description: 'I used to live in my car',
  city_id: Cities.sample
)

Spot.create!(
  owner_id: user1.id,
  city: 'New York City',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user2.id,
  city: 'New York City',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user3.id,
  city: 'New York City',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user4.id,
  city: 'San Francisco',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user5.id,
  city: 'San Francisco',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user6.id,
  city: 'DC',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user7.id,
  city: 'DC',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user8.id,
  city: 'Rome',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user9.id,
  city: 'Paris',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)

Spot.create!(
  owner_id: user10.id,
  city: 'Rome',
  description: 'Nice 2br apartment, close to the heart of the city',
  lat: 10,
  long: 10
)
