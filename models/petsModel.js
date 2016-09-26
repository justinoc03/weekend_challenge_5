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

//whatever is in the name slot will turn the COLLECTION (collections are inside databases) into a plural word (petsDB turns into petsDBs)
//you almost never actually call a collection inside mongo/mongoose so it isn't much of an issue. Most of the time you would be using the DB name
var petsModel = mongoose.model('petsDB', petSchema);

module.exports = petsModel;
