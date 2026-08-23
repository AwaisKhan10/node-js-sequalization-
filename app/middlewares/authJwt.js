// JWT verification guard — wire verifyToken when auth is added
exports.verifyToken = (req, res, next) => {
  next();
};
