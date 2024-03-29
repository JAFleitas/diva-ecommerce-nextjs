import { db } from ".";
import { Product } from "../models";
import { IProduct } from "../interfaces";

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  await db.connect();

  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();

  if (!product) return null;

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlugs {
  slug: string;
}
export const getAllProductSlugs = async (): Promise<ProductSlugs[]> => {
  await db.connect();

  const slugs = await Product.find().select("slug -_id").lean();

  await db.disconnect();

  return slugs;
};

export const getProductsBySearchTerm = async (
  term: string
): Promise<IProduct[]> => {
  term = term.toString().toLowerCase();
  await db.connect();

  const products = await Product.find({ $text: { $search: term } })

    .select("title slug price images inStock -_id")
    .lean();

  await db.disconnect();

  return products;
};

export const getAllProducts = async () => {
  await db.connect();

  const products = await Product.find().lean();

  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};
