import { Box, Button } from "@mui/material";
import { FC } from "react";
import { ValidSizes } from "../../interfaces";

interface Props {
  selectedSize: ValidSizes;
  sizes: ValidSizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          color={selectedSize === size ? "primary" : "info"}
          size="small"
          key={size}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
