const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'your-secret-key-change-this';

const generateToken = (userId) => {
  return jwt.sign({ userId }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
