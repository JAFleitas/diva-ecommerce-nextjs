import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";
import { SHOP_CONSTANTS } from "../../../database/constants";

type Data = { message: string } | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;
  const { validGenders } = SHOP_CONSTANTS;
  let condition = {};

  if (gender !== "all" && validGenders.includes(`${gender}`)) {
    condition = { gender };
  }

  await db.connect();

  const products = await Product.find(condition)
    .select("title images price slug inStock -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
