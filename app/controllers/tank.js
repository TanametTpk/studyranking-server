const tank = require('../classes/tank');

exports.get = async (req , res) => {

	try {

		tankTarget = await tank.findManyAndPopulate(req.query , req._populate);

		res.success(tankTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		tankTarget = await tank.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(tankTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let tankTarget = await tank.find( {_id: req._objectId } , req._populate );
		tankTarget = await tank.wrap( tankTarget );
		res.success(tankTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await tank.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await tank.find({ _id : req._objectId });
		let updatedObj = await tank.update(target , req.body);
		updatedObj = await tank.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await tank.find({ _id : req._objectId });
		let deletedObj = await tank.deleteObj(target);
		deletedObj = await tank.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};



