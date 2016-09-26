var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var port = process.env.PORT || 5000;

//only require mongoose here if not using routers
var mongoose = require('mongoose');
app.use(bodyParser.json());

//use this instead of routers
var addPet = require('../models/addPet.js');

//connect to the DB with DB name: petsDB
mongoose.connect("mongodb://localhost:27017/petsDB");

//get the DB listening
app.listen(port, function(){
  console.log('FTL Drive spun up on', port + ', brace for jump...');
});

//GET info already sitting in server
app.get( '/', function( req, res ){
res.sendFile( path.resolve( 'public/index.html' ) );
});


/////////////////Show All Pets////////////////////////////////
//use this instead of routers
app.get('/viewPets', function(req, res){
  console.log('in viewPets');

  addPet.find({}, function(err, petResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(petResults);
      console.log(petResults);
    }
  });
});




/////////////////Add New Pets////////////////////////////////

app.post('/addNewPet', function(req, res){
  console.log('hit the .post addNewPet');
  console.log('request body', req.body);

  var sendData = req.body;

  var newPet = new addPet({
    name: sendData.name ,
    age: sendData.age,
    animalType: sendData.animalType,
    createdOn: sendData.createdOn,
    petUrl: sendData.petUrl
  });

  newPet.save(function(err){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      }
      else{
        console.log('success with new pet:', newPet);
        res.send(newPet);
      }
    });

});


//make sure public is static/ doesn't see other stuff in files
app.use( express.static( 'public' ) );
