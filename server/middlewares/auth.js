import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).send({ message: "Token not provided" });
  }

  const jwtToken = token.split(" ")[1];

  if (!jwtToken) {
    return req.status(401).send({ message: "Token obso" });
  }

  jwt.verify(jwtToken, process.env.SECRET, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: err.message });
    } else {
      res.locals.userId = decode.userId;
      next();
    }
  });
};
