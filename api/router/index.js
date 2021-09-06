const router = require('express').Router();
const path = require('./path');

/*
* Api Router, render Json
*/
router.use('/api', path);

/*
* url Router Not Found,
*/
router.get('/*', (req, res ) => {
    res.status(404).json({msj: 'url not found'});
  });

module.exports = router;