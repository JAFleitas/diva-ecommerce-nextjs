import { Grid, Typography } from "@mui/material";
export const OrderSumary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography> N° Products</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${144.32}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Tax (15%)</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${21.02}`}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{`$${163.34}`}</Typography>
      </Grid>
    </Grid>
  );
};
