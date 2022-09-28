import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";
import { FullScreenLoading } from "../components/ui";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout title={"DiVA-Shop - Home"} pageDescription={""}>
      <Typography variant="h1" component="h1">
        Shop
      </Typography>
      <Typography variant="h2">All Products</Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
