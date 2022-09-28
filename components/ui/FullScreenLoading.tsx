import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 200px)"
      flexDirection="column"
    >
      <Typography sx={{ mb: 2 }} fontWeight={400} fontSize={20} variant="h2">
        Loading...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
