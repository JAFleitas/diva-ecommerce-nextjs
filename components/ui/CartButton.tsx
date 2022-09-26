import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, IconButton, Link } from "@mui/material";
import NextLink from "next/link";

export const CartButton = () => {
  return (
    <NextLink href="/cart" passHref>
      <Link>
        <IconButton>
          <Badge badgeContent={3} color="secondary">
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
      </Link>
    </NextLink>
  );
};
