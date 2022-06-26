import { FC, useMemo, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { Product } from "../../interfaces";
import { LinkComponent } from "../ui";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageProduct = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);
  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <LinkComponent href={"/product/slug"} prefetch={true}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={imageProduct}
              alt={product.title}
              className="fadeIn"
            />
          </CardActionArea>
        </LinkComponent>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
