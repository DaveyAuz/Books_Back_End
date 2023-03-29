'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// **** REQUIRE IN OUR MONGOOSE LIBRARY **** //
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());

// define PORT validate env is working
const PORT = process.env.PORT || 3001;

// LISTEN
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

// **** DATABASE CONNECTION MONGOOSE ********** //
// ** PER THE MONGOOSE LIBRARY PLUG AND PLAY ** //

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
})

// Routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome To The Server');
});

app.get('*', (request, response) => {
  response.status(404).send('Page Not Found');
});

// ERROR HANDLER
app.use((error, request, response, next) => {
console.log(error.message);
  response.status(500).send(error.message);
})




app.get('/test', (request, response) => {
  response.send('test request received')
})

app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
