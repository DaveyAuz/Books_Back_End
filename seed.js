'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/books.js');

async function seed() {
  // name: { type: String, required: true },
  // author: { type: String, required: true },
  // genre: { type: String, required: true },
  // pages: { type: Number, required: true },
  // description: { type: String, required: true },
  // image: { type: String, required: true },

  await Book.create({
    name: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    pages: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });
  console.log('Ronald was created!');

  await Book.create({
    name: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    pages: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });

  await Book.create({
    name: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    pages: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });
  console.log('Victor was added'),

  mongoose.disconnect();
}
seed();
// get await() {
//     return this._await;
// },
// set await(value) {
//     this._await = value;
// };
