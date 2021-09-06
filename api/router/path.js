const router = require('express').Router();

const authenticate = require('../controller/authenticate');
const jwt = require('../middleware/jwt');
const userMe = require('../controller/userMe');

/*
* user authenticate
*/
router.post('/v0/authenticate', authenticate);

router.get('/v0/users/me', jwt, userMe);

module.exports = router;
