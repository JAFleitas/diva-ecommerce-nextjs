import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { CartContext } from "../../context";
import { currency } from "../../utils";

const tax = Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100 || 0;
export const OrderSumary = () => {
  const { numberOfItems, tax_rate, subTotalPrice, totalPrice } =
    useContext(CartContext);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography> N° Products</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {numberOfItems} {numberOfItems > 1 ? "items" : "item"}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currency.format(subTotalPrice)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Tax {`${tax}%`}</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{currency.format(tax_rate)}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography variant="subtitle1">
          {currency.format(totalPrice)}
        </Typography>
      </Grid>
    </Grid>
  );
};
