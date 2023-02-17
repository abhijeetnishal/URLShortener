const { Entity, Schema } = require('redis-om');

class URL extends Entity {}

const urlSchema = new Schema(URL, {
  originalURL: { type: 'string' },
  shortURL: { type: 'string', textSearch: true},
});

module.exports = urlSchema;