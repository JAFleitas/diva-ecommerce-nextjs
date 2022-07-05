import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { initialData } from "../../database/products";

const product = initialData.products[0];
const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}{" "}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {`$${product.price}`}{" "}
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <SizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
              />
            </Box>

            <Button color="secondary" className="circular-btn">
              Add to cart
            </Button>
            {/* <Chip label="No available" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Description</Typography>
              <Typography variant="body2"> {product.description} </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;