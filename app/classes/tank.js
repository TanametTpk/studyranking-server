const Tank = require( "mongoose" ).model( "tank" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/awt.config');

const find = (query , populate) => {

	let result = Tank.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Tank.find(query , "description , time , user").limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const tank = new Tank(data);

	return tank.save();

};

const update = ( tank, data ) => {

	const { description , time , user } = data;
	const currentTank = tank;

	if (description) currentTank.description = description;
	if (time) currentTank.time = time;
	if (user) currentTank.user = user;


	return tank.save();

};

const deleteObj = ( tank ) => tank.remove();

const wrap = (tank) => {

	if (tank === null) return {};
	const { _id , description , time , user } = tank;

	return { _id , description , time , user };

}



module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,

};
