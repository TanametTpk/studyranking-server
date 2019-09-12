const Tank = require( "mongoose" ).model( "task" );

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

	const task = new Tank(data);

	return task.save();

};

const update = ( task, data ) => {

	const { description , time , user } = data;
	const currentTank = task;

	if (description) currentTank.description = description;
	if (time) currentTank.time = time;
	if (user) currentTank.user = user;


	return task.save();

};

const deleteObj = ( task ) => task.remove();

const wrap = (task) => {

	if (task === null) return {};
	const { _id , description , time , user } = task;

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
