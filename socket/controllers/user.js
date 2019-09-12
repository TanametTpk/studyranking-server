const User = require('../../app/classes/user');

module.exports = (socket) => {

	socket.on('create-user' , async(data) => {

		try{

			let data = await User.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-user' , async(data) => {

		try{

			let target = await User.find({ _id : data._objectId });
			let data = await User.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-user' , async(data) => {

		try{

			let target = await User.find({ _id : data._objectId });
			let data = await User.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
