const jwt = require('jsonwebtoken');
const users = require('./users');


const authenticationMiddleware = (req, res, next) => {
  let jwtPayload = {};

  // extract jwt / authentication
  const token = String(req.headers?.authorization?.split(" ")[1]);
  if (!token) {
    res.status(400).send({ error: "token not found" });
  }
  try {
    jwtPayload = jwt.verify(token, String(process.env.TOKEN_SECRET));
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(400).send({ error: "token invalid" });
    return;
  }
  next();
};

const authorizationMiddleware = (allowedRoles) => (req, res, next) => {
  const { jwtPayload } = res.locals;
  // check jwt / authorization
  const user = users.find((o) => o.username === jwtPayload.sub);
  if (!allowedRoles.includes(user.role)) {
      res.status(401).send({ error: "unauthorized" });
      return;
  }
  next();
};

module.exports = {
  authenticationMiddleware,
  authorizationMiddleware
}