import { NextApiRequest, NextApiResponse } from "next";
import cookies from "js-cookie";
import { verifyAccessToken } from "../utils/jwt";
import { errorResponse } from "../utils/apiResponse";

export const authMiddleware = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // const accessToken = cookies.get("accessToken");
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      return res.status(401).json(errorResponse("Unauthorized", 401));
    }

    try {
      const decodedToken = verifyAccessToken(accessToken);
      req.userId = decodedToken.id;
      return handler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json(errorResponse("Invalid or expired token", 401));
    }
  };
};
