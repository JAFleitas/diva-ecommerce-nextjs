import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout title={"DiVA-Shop - Home"} pageDescription={""}>
      <Typography variant="h1" component="h1">
        Shop
      </Typography>
      <Typography variant="h2">All Products</Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
