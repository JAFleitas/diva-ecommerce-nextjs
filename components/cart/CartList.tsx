import { FC, useContext } from "react";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ItemCounter, LinkComponent } from "../ui";
import { CartContext } from "../../context";
import { ICartProduct } from "../../interfaces";

interface Props {
  editable?: boolean;
}
export const CartList: FC<Props> = ({ editable = false }) => {
  const {
    cart,
    updateProductQuantity,
    removeCartProduct,
    numberOfItems,
    tax_rate,
    subTotalPrice,
    totalPrice,
  } = useContext(CartContext);

  const onUpdateQuantityProduct = (product: ICartProduct, newValue: number) => {
    product.quantity = newValue;
    updateProductQuantity(product);
  };
  return (
    <>
      {cart.map((product) => (
        <Grid
          key={product.slug + product.size}
          container
          spacing={2}
          sx={{ mb: 1 }}
        >
          <Grid item xs={3}>
            <LinkComponent href={`/product/${product.slug}`}>
              <CardActionArea>
                <CardMedia
                  image={`/products/${product.image}`}
                  component="img"
                  sx={{ borderRadius: "4px" }}
                />
              </CardActionArea>
            </LinkComponent>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Size: <strong>{product.size}</strong>
              </Typography>
              {/* conditional */}
              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  updateQuantity={(value) => {
                    onUpdateQuantityProduct(product, value);
                  }}
                  maxValue={10}
                />
              ) : (
                <Typography variant="h5">
                  {product.quantity} {product.quantity > 1 ? "items" : "item"}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            {editable && (
              <Button
                onClick={() => removeCartProduct(product)}
                variant="text"
                color="error"
              >
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
