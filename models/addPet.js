var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  age: Number,
  animalType: String,
  petUrl: String,
  createdOn: { type: Date, default: Date.now }

});

//whatever is in the name slot will turn into a plural word (petsDB turns into petsDBs)
var addPet = mongoose.model('petsDB', petSchema);

module.exports = addPet;
