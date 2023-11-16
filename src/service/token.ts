import jwt, {JwtPayload} from "jsonwebtoken";
import {JWT_ACCESS_KEY} from "../../config";

if (!JWT_ACCESS_KEY) {
  throw new Error(`Token service: missed JWT_ACCESS_KEY`);
}

const generateToken = (data: string | object | Buffer, expiresInSeconds: number): string => {
  return jwt.sign(data, JWT_ACCESS_KEY as string, {expiresIn: expiresInSeconds});
};

const validateToken = (token: string): string | JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_ACCESS_KEY as string);
  } catch (err) {
    return null;
  }
};

export {
  generateToken,
  validateToken,
};
