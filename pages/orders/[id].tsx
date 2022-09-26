import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CartList, OrderSumary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { LinkComponent } from "../../components/ui";

const OrderPage = () => {
  return (
    <ShopLayout title={"Order Summary"} pageDescription={"Order Summary"}>
      <Typography component="h1" variant="h1">
        Order: ABC123
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label="Not payed"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Paid order"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Summary</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Shipment information
                </Typography>
                <LinkComponent href="/checkout/address" prefetch>
                  <a style={{ textDecoration: "underline" }}>Edit</a>
                </LinkComponent>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <LinkComponent href="/cart" prefetch>
                  <a style={{ textDecoration: "underline" }}>Edit</a>
                </LinkComponent>
              </Box>

              <OrderSumary />
              <Box sx={{ mt: 3 }}>
                {/* TODO */}
                <h1>Pay</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
