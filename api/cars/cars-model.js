const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const cars = await db
    .select("*")
    .from("cars")

    return cars
}

const getById = async (id) => {
  // DO YOUR MAGIC
  const car = await db
    .select("*")
    .from("cars")
    .where("id", id)
    .first()
  return car;
}

const create = async (id, car) => {
  // DO YOUR MAGIC
  const post = await db
    .insert({
      vin: car.vin,
      make: car.make,
      model: car.model,
      mileage: car.mileage,
      title: car.title,
      transmission: car.transmission
      })
    .into("cars")
    return post;
}

module.exports = {
  getAll,
  getById,
  create
}
