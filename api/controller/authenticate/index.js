const config = require('config');
const jwt = require('jsonwebtoken');

const { authMdb } = require('../../service/auth');

const authenticate = (req, res) => {
	const { username, password } = req.body;

   // #feature, function to validate correct parameters. Ej: Validate SQL injection
	if ( username && password ) {  

		const jwtConf = config.get('jwt');
		
		authMdb({ username, password }).then(() => {
			const token = jwt.sign({
				data: {
					userInfo: 'userinfo',
				}
			}, jwtConf.secret, { expiresIn: jwtConf.expiresIn });

			res.json({ jwt: token });
		}).catch(err => {
			res.status(500).json({
				msj: 'Internal Error',
				code: 123,
				err,
			});
		});

	} else {
		res.status(400).json({
			msj: 'Bad Request',
			code: 122,
		});
	}
};

module.exports = authenticate;
