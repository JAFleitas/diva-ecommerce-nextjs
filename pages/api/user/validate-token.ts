import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../database";
import { User } from "../../../models";
import { jwt } from "../../../utils";
import { IDataResponseUser } from "../../../interfaces";

type Data =
  | {
      message: string;
    }
  | IDataResponseUser;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return checkJWT(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token = "" } = req.cookies;

  let userId = "";

  try {
    userId = await jwt.isValidToken(token);
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  await db.connect();

  const user = await User.findById(userId).lean();

  await db.disconnect();

  if (!user) return res.status(404).json({ message: "Invalid User" });

  const { role, name, email } = user;

  return res.json({
    token: jwt.signToken(userId, email),
    user: {
      email,
      role,
      name,
    },
  });
};
