import { Box, Button } from "@mui/material";
import { FC } from "react";
import { ValidSizes } from "../../interfaces";

interface Props {
  selectedSize?: ValidSizes;
  sizes: ValidSizes[];
  // method
  onSelectedSize: (size: ValidSizes) => void;
}

export const SizeSelector: FC<Props> = ({
  selectedSize,
  sizes,
  onSelectedSize,
}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          color={selectedSize === size ? "primary" : "info"}
          size="small"
          key={size}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
