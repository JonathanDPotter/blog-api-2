import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
  console.log("Validating Token");
  let token = req.headers.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, config.server.token.secret, (error, decoded) => {
      if (error) {
        return res.json(error);
      } else {
        res.locals.jwt = decoded;
        console.log(`Valid Token`);
        next();
      }
    });
  } else {
    res.status(401).json("unauthorized");
  }
};

export default extractJWT;
