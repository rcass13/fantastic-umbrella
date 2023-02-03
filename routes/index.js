const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

router.use('/api', apiRoutes);

router.use((req, res) => {
res.send("<h1>Wrong Route!</h1>")
});



// import sequelize connection
const sequelize = require('../config/connection');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
module.exports = router;