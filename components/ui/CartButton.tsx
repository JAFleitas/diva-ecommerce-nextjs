import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, IconButton, Link } from "@mui/material";
import NextLink from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context";

export const CartButton = () => {
  const { numberOfItems } = useContext(CartContext);
  return (
    <NextLink href="/cart" passHref>
      <Link>
        <IconButton>
          <Badge
            badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
            color="secondary"
          >
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
      </Link>
    </NextLink>
  );
};
