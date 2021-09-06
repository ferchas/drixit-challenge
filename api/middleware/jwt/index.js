const config = require('config');
const jwt = require('jsonwebtoken');

const jwtMid = (req, res, next) => {
  const jwtConf = config.get('jwt');
  // verify a token symmetric
  try {
    const tokenJwt = req.headers.authorization.replace('Bearer ','');
    jwt.verify(tokenJwt, jwtConf.secret, function(err, decoded) {
      if( err ) { 
        res.status(403).json({ msj: 'SESSION_EXPIRED' });
      } else {
        req.userJwt = decoded;
        next();
      }
    });
  } catch (e) {
    res.status(500).json({ msj: 'Error jwt verify' });
  }
  
};

module.exports = jwtMid;