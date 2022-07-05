import { RemoveShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../../components/layouts";
import { LinkComponent } from "../../../components/ui";

const EmptyPage = () => {
  return (
    <ShopLayout
      title={"Empty cart"}
      pageDescription={"There are no items in the shopping cart!"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCart sx={{ fontSize: 120 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Your cart is empty.</Typography>
          <LinkComponent href="/">
            <Typography color="secondary" variant="h4" component="h4">
              Go back Home
            </Typography>
          </LinkComponent>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
