import { FC } from "react";
import { AddCircleOutlined, RemoveCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface Props {
  currentValue: number;
  maxValue: number;
  updateQuantity: (newValue: number) => void;
}

export const ItemCounter: FC<Props> = ({
  currentValue,
  maxValue,
  updateQuantity,
}) => {
  const addOrRemove = (value: number) => {
    if (currentValue + value === 0) return;
    if (!currentValue) return;
    if (currentValue === maxValue && value === 1) return;
    updateQuantity(currentValue + value);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => addOrRemove(-1)}>
        <RemoveCircleOutlined />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {maxValue ? currentValue : maxValue}
      </Typography>
      <IconButton onClick={() => addOrRemove(1)}>
        <AddCircleOutlined />
      </IconButton>
    </Box>
  );
};
