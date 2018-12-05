const app = require('../server');

function checkInOut(username) {
	return new Promise((resolve, reject) => {
		const { Client } = app.models;
		Client.find({ where: { username: username} })
			.then((client) => {
				if (client[0].currentlyCheckedIn == false) {
					// why doesn't the spread operator work here?
					const updateClient = {
						"firstName": client[0].firstName,
						"lastName": client[0].lastName,
						"location": client[0].location,
						"tableclothClientId": client[0].tableclothClientId,
						"gender": client[0].gender,
						"birthday": client[0].birthday,
						"gradeAtSignup": client[0].gradeAtSignup,
						"signUpDate": client[0].signUpDate,
						"currentlyCheckedIn": true,
						"username": client[0].username,
						"id": client[0].id
					  }
					Client.replaceOrCreate(updateClient)
						.then(() => resolve(updateClient))
						.catch(err => reject(err));
				}
				if (client[0].currentlyCheckedIn == true) {
					// why doesn't the spread operator work here?
					const updateClient = {
						"firstName": client[0].firstName,
						"lastName": client[0].lastName,
						"location": client[0].location,
						"tableclothClientId": client[0].tableclothClientId,
						"gender": client[0].gender,
						"birthday": client[0].birthday,
						"gradeAtSignup": client[0].gradeAtSignup,
						"signUpDate": client[0].signUpDate,
						"currentlyCheckedIn": false,
						"username": client[0].username,
						"id": client[0].id
					  }
					Client.replaceOrCreate(updateClient)
						.then(() => resolve(updateClient))
						.catch(err => reject(err));
				}
				else {
					console.log('wrong')
				}
			})
			.catch(err => reject({ error: 'Could not find username', err }))
	})
}



module.exports = { checkInOut };
