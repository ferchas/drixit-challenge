const config = require('config');
const dataMoksup = require('./dataMoks.json');

const authMdb = () => {
	//connect DB and verify user.
	return new Promise((resolve, reject) => {

		resolve('ok');
	});
};



module.exports = {
	authMdb,
};