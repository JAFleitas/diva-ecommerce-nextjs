import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { db } from "../../../database";
import { User } from "../../../models";
import { jwt, validations } from "../../../utils";
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
      return registerUser(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    email = "",
    password = "",
    name = "",
  } = req.body as { email: string; password: string; name: string };

  if (password.length < 6)
    return res.status(400).json({ message: "Password must be longer" });

  if (name.length < 2)
    return res.status(400).json({ message: "Name must be longer" });

  if (!validations.isValidEmail(email))
    return res.status(400).json({ message: "Wrong Email" });

  await db.connect();
  const user = await User.findOne({ email: email.toLowerCase() });

  if (user) {
    return res.status(400).json({ message: "Wrong Email" });
  }

  const newUser = new User({
    name,
    email: email.toLowerCase(),
    password: bcrypt.hashSync(password),
    role: "client",
  });

  try {
    await newUser.save();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
  await db.disconnect();

  const { role, _id } = newUser;

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
