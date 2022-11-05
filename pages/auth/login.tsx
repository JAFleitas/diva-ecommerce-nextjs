import { useContext, useState } from "react";
import { Box, Grid, TextField, Typography, Button, Chip } from "@mui/material";
import { useForm } from "react-hook-form";

import { AuthLayout } from "../../components/layouts";
import { LinkComponent } from "../../components/ui";
import { validations } from "../../utils";
import { ErrorOutline } from "@mui/icons-material";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type FormData = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showError, setShowError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const router = useRouter();

  const onLoginUser = async ({ email, password }: FormData) => {
    const isValidLogin = await loginUser(email, password);

    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    router.replace("/");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h1" component="h1">
                Welcome!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                {...register("email", {
                  required: "Required field",
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="filled"
                fullWidth
                {...register("password", {
                  required: "Required field",
                  minLength: {
                    value: 6,
                    message: "Password requires min 6 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <LinkComponent href="/auth/register">
                <Typography variant="subtitle2" sx={{ color: "#58a5f4" }}>
                  Sign In?
                </Typography>
              </LinkComponent>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ minHeight: 60 }}
              display="flex"
              justifyContent="center"
            >
              {showError ? (
                <Chip
                  label="Credentials error"
                  color="error"
                  icon={<ErrorOutline />}
                  className="fadeIn"
                />
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
