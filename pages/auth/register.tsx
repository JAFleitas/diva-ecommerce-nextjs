import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { AuthLayout } from "../../components/layouts";
import { LinkComponent } from "../../components/ui";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <Box sx={{ width: 400, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="h1" component="h1">
              Welcome!
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
            <Grid item>
              <TextField label="Name" variant="filled" />
            </Grid>
            <Grid item>
              <TextField label="Surname" variant="filled" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <LinkComponent href="/auth/login">
              <Typography variant="subtitle2" sx={{ color: "#58a5f4" }}>
                Do you have an account?
              </Typography>
            </LinkComponent>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
