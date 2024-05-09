const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const mongoose = require('mongoose');

async function dbConnect() {
  try {
    const url = process.env.DB_URL;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Unable to connect to MongoDB Atlas:', error);
    throw error;
  }
}

module.exports = dbConnect;