import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";

const CustomPage404 = () => {
  return (
    <ShopLayout title={"Page not found"} pageDescription={"Page not found"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 200px)"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography variant="h1" component="h1" fontSize={60} fontWeight={100}>
          404 |
        </Typography>
        <Typography sx={{ ml: 3 }}>Page not Found.</Typography>
      </Box>
    </ShopLayout>
  );
};

export default CustomPage404;
