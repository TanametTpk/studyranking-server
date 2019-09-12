const task = require('../classes/task');

exports.get = async (req , res) => {

	try {

		taskTarget = await task.findManyAndPopulate(req.query , req._populate);

		res.success(taskTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		taskTarget = await task.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(taskTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let taskTarget = await task.find( {_id: req._objectId } , req._populate );
		taskTarget = await task.wrap( taskTarget );
		res.success(taskTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await task.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await task.find({ _id : req._objectId });
		let updatedObj = await task.update(target , req.body);
		updatedObj = await task.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await task.find({ _id : req._objectId });
		let deletedObj = await task.deleteObj(target);
		deletedObj = await task.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};



