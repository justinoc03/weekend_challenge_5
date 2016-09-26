var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//build object literal for adding to mongoDB
var petSchema = new Schema({
  name: String,
  age: Number,
  animalType: String,
  petUrl: String,
  createdOn: { type: Date, default: Date.now }

});

//whatever is in the name slot will turn into a plural word (petsDB turns into petsDBs)
var petsModel = mongoose.model('petsDB', petSchema);

module.exports = petsModel;
