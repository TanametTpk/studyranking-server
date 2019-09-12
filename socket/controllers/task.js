const Tank = require('../../app/classes/task');

module.exports = (socket) => {

	socket.on('create-task' , async(data) => {

		try{

			let data = await Tank.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-task' , async(data) => {

		try{

			let target = await Tank.find({ _id : data._objectId });
			let data = await Tank.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-task' , async(data) => {

		try{

			let target = await Tank.find({ _id : data._objectId });
			let data = await Tank.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
