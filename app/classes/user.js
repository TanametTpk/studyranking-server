const User = require( "mongoose" ).model( "user" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/awt.config');

const find = (query , populate) => {

	let result = User.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = User.find(query , "name").limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const user = new User(data);

	return user.save();

};

const update = ( user, data ) => {

	const { name } = data;
	const currentUser = user;

	if (name) currentUser.name = name;


	return user.save();

};

const deleteObj = ( user ) => user.remove();

const wrap = (user) => {

	if (user === null) return {};
	const { _id , name } = user;

	return { _id , name };

}



module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,

};
