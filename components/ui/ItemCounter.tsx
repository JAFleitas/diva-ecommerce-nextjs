import { AddCircleOutlined, RemoveCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export const ItemCounter = () => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircleOutlined />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>1</Typography>
      <IconButton>
        <AddCircleOutlined />
      </IconButton>
    </Box>
  );
};
