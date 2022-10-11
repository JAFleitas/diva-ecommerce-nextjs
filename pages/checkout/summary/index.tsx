import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CartList, OrderSumary } from "../../../components/cart";
import { ShopLayout } from "../../../components/layouts";
import { LinkComponent } from "../../../components/ui";

const SummaryPage = () => {
  return (
    <ShopLayout title={"Order Summary"} pageDescription={"Order Summary"}>
      <Typography component="h1" variant="h1">
        Order Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Shipment information
                </Typography>
                <LinkComponent href="/checkout/address">
                  <p style={{ textDecoration: "underline" }}>Edit</p>
                </LinkComponent>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <LinkComponent href="/cart">
                  <p style={{ textDecoration: "underline" }}>Edit</p>
                </LinkComponent>
              </Box>

              <OrderSumary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
