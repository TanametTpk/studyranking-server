var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var tankSchema = Schema({

	description : { type:String, required : true},
	time : { type:Number, required : true},
	user : { type:mongoose.Schema.Types.ObjectId , ref: 'time', required : true},

})

module.exports = mongoose.model('tank', tankSchema)