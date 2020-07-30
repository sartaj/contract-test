const resolvers = require('./graphql');

module.exports = (app, db) => {
  app.get('/desserts', (req, res, next) => {
    resolvers.Query.desserts(null, null, { db })
      .then((data) => {
        if (!data) res.send(404);
        res.send(data);
      })
      .catch(next);
  });

  app.get('/dessert/:id', (req, res, next) => {
    const { id } = req.params;
    resolvers.Query.dessert(null, { id }, { db })
      .then((data) => {
        if (!data) res.send(404);
        res.send(data);
      })
      .catch(next);
  });

  app.post('/dessert', (req, res) => {
    const { id, name, nutritions } = req.body;

    resolvers.Mutation.dessert(
      null,
      { id, dessert, nutritions },
      { db }
    )
      .then((data) => {
        if (!data) res.send(404);
        res.send(data);
      })
      .catch(next);
  });
};
