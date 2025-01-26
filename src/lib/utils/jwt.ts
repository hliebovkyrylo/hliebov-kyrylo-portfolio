import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN as string, 864000);

export const createAccessToken = (id: string) => {
  return jwt.sign(
    {
      id,
    },
    JWT_SECRET,
    {
      expiresIn: 864000,
    }
  );
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as { id: string };
};
