import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";

const CategoryWomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <ShopLayout
      title={"DiVA-Shop - Women "}
      pageDescription={
        "The best clothes for women. Pants, t-shirts, sweatshirts, jeans, jackets and more"
      }
    >
      <Typography variant="h1" component="h1">
        Shop
      </Typography>
      <Typography variant="h2">Women Products</Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default CategoryWomenPage;
