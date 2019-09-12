const user = require('../classes/user');
const task = require('../classes/task');

exports.get = async (req , res) => {

	try {

		userTarget = await user.findManyAndPopulate(req.query , req._populate);

		res.success(userTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		userTarget = await user.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(userTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let userTarget = await user.find( {_id: req._objectId } , req._populate );
		userTarget = await user.wrap( userTarget );
		res.success(userTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await user.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await user.find({ _id : req._objectId });
		let updatedObj = await user.update(target , req.body);
		updatedObj = await user.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await user.find({ _id : req._objectId });
		let deletedObj = await user.deleteObj(target);
		deletedObj = await user.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};

exports.getRank = async (req , res) => {

	try {

		let users = await user.find();
		let totalTime = await task.getTotalTime();
		let userMap = {}

		totalTime.map((t) => {

			// get user id
			let userID = t.user

			if (!userMap[userID]) userMap[userID] = 0
			userMap[userID] += t.time

		})

		users = users.map((u) => {

			return {
				user:u,
				time: userMap[u._id] ? userMap[u._id] : 0
			}

		})

		res.success(users);

	} catch (err){
			res.preconditionFailed();
	}

};