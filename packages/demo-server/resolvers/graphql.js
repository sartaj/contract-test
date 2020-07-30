module.exports = {
  Query: {
    dessert: (obj, { id }, { db }) => db.desserts.findById(id),
    desserts: (obj, args, { db }) => db.desserts.findAll()
  },
  Mutation: {
    createDessert: (obj, { name, nutritions }, { db }) => {
      return db.desserts.create({
        name,
        nutritions,
      })
      .then(result => result.dataValues.id)
      .catch(e => console.error('create failed'))
    },
  }
}
