import jwt from "jsonwebtoken";
import { constants } from "../../config/constants";
import IUser from "../../types/user";

const { jwt: jwtConstants } = constants;
const { jwt_expiration: expiration_time, jwt_secret: secret } = jwtConstants;

const getJWT = (user: IUser | null) => {
  const jwtOptions = {
    expiresIn: expiration_time
  };

  const userObject = {
    userId: user?.id,
    email: user?.email
  };

  return jwt.sign(userObject, secret, jwtOptions);
  // return jwt.sign(userObject, process.env.SECRET, jwtOptions);
};

const authenticateJWT = (token: string) => {
  return jwt.verify(token, secret);
};

export default { getJWT, authenticateJWT };
