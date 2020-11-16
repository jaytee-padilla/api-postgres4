const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');

// database
const db = require('./config/db');

// test db connection via IIFE
(async function () {
  try {
    await db.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({message: 'Server is up and running'});
});

app.listen(port, () => {
  console.log(`\nServer is listening at port: ${port}\n`);
});