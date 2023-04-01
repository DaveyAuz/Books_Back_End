'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  pages: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
console.log(bookSchema);

  await book.create({
		name: 'A Treaties on Possibility: Perspectives on Humanity Hereafter',
  author: 'Rou Reynolds',
  genre: 'Nonfiction',
  pages: { type: 287, required: true },
  description: 'Human possibility. If we get our act together, our long-term potential is virtually infinite. And infinitely beautiful. But currently humanity is being guided not by wisdom, cooperation and self-reflection but by archaic systems and false assumptions. There are warning signs everywhere: ecological destruction, mental health crises, and obscene levels of inequality.',
  image: { type: String, required: true },
	})

