var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  age: Number,
  animalType: String,
  createdOn: { type: Date, default: Date.now },
  petUrl: String
});


var addPet = mongoose.model('petsDB', petSchema);

module.exports = addPet;
