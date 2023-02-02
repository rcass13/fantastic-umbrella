const router = require('express').Router();
const apiRoutes = require('./api');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")

});

module.exports = router;

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});