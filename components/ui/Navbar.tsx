import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { LinkCategory, CartButton, Search } from "./";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">DiVA |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <LinkCategory href="/category/men" contentButton="Men" />
          <LinkCategory href="/category/women" contentButton="Women" />
          <LinkCategory href="/category/children" contentButton="Children" />
        </Box>
        <Box flex={1} />
        <Search />
        <CartButton />
        <Button sx={{ ml: 2 }}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
