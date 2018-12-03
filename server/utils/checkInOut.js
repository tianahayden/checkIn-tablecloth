const app = require('../server');

function checkInOut(username) {
	return new Promise((resolve, reject) => {
		const { Client } = app.models;
		Client.find({ where: { username: username} })
			.then((client) => {
				if (client.currentlyCheckedIn === false) {
					const updateClient = {
						...client,
						"currentlyCheckedIn": true,
					}
					Client.replaceOrCreate(updateClient)
						.then(() => resolve(updateClient))
						.catch(err => reject(err));
				}
			})
			.catch(err => reject({ error: 'Could not find username', err }))
	})
}



module.exports = { changeTalkContent };
