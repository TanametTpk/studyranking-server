var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var userSchema = Schema({

	name : { type:String, required : true, lowercase : true, trim : true},

})

userSchema.index({ name:1 } , {unique: true});

module.exports = mongoose.model('user', userSchema)