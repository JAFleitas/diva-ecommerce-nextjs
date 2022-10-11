import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
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
    case "POST":
      return loginUser(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "", password = "" } = req.body;

  await db.connect();

  const user = await User.findOne({ email });

  await db.disconnect();

  if (!user || !bcrypt.compareSync(password, user.password!))
    return res.status(404).json({ message: "Wrong Email or Password" });

  const { role, name, _id } = user;

  const token = jwt.signToken(_id, email);
  return res.json({
    token,
    user: {
      email,
      role,
      name,
    },
  });
};
