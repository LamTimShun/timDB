/* init database 
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var mongoClient = new MongoClient(new Server('ds263639.mlab.com', 63639));
var dbName = 'nodejsweather';
//177010451:Aa68151586
mongoClient.connect(function(err, mongoClient) {
	var db = mongoClient.db(dbName);
	exports.db = db;
}); */

var mongoose = require('mongoose')
const server = 'mongodb://177001811:Timlam123@ds251588.mlab.com:51588/timlam'
console.log('connect to server: '+server)
mongoose.connect(server, function(){
	console.log('mongodb connected')
});
module.exports = mongoose