import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, TextField, Typography, Button, Chip } from "@mui/material";
import { AuthLayout } from "../../components/layouts";
import { LinkComponent } from "../../components/ui";
import { validations } from "../../utils";
import { divaApi } from "../../api";
import { ErrorOutline } from "@mui/icons-material";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [messageError, setMessageError] = useState<string>("");
  const { registerUser } = useContext(AuthContext);

  const onRegisterUser = async ({ name, email, password }: FormData) => {
    setShowError(false);
    const { hasError, message } = await registerUser(name, email, password);
    if (hasError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      setMessageError(message || "");
      return;
    }
    const destination = router.query.p?.toString() || "/";
    router.replace(destination);
  };
  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit(onRegisterUser)} noValidate>
        <Box sx={{ width: 400, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography variant="h1" component="h1">
                Welcome!
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="filled"
                  fullWidth
                  {...register("name", {
                    required: "Required field",
                    minLength: {
                      value: 3,
                      message: "Password requires min 3 characters",
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
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
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <LinkComponent
                href={`/auth/login?p=${router.query.p?.toString() || "/"}`}
              >
                <Typography variant="subtitle2" sx={{ color: "#58a5f4" }}>
                  Do you have an account?
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
                  label={messageError}
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

export default RegisterPage;
