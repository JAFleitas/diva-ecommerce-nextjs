import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET_SEED || "";

export const signToken = (_id: string, email: string) => {
  return jwt.sign(
    {
      _id,
      email,
    },
    SECRET,
    { expiresIn: "30d" }
  );
};

export const isValidToken = (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, SECRET, (err, data) => {
        if (err) return reject("Invalid Token");

        const { _id } = data as { _id: string };

        resolve(_id);
      });
    } catch (error) {
      reject("Invalid Token");
    }
  });
};
