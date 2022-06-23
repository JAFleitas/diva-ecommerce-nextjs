import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <ShopLayout title={"DiVA-Shop - Home"} pageDescription={""}>
      <Typography variant="h1" component="h1">
        Shop
      </Typography>
      <Typography variant="h2">All Products</Typography>
    </ShopLayout>
  );
};

export default Home;
