const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (req, _res, next) => {
  const { password, ...user } = req.body;
  const token = jwt.sign(user, SECRET, jwtConfig);

  req.token = token;

  next();
};

module.exports = createToken;