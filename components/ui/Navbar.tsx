import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
  capitalize,
} from "@mui/material";
import { LinkComponent, CartButton, Search } from "./";

const categories: string[] = ["men", "women", "children"];

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
          {categories.map((category, index) => (
            <LinkComponent key={index} href={`category/${category}`}>
              <Button sx={{ margin: "0px 4px" }}>{capitalize(category)}</Button>
            </LinkComponent>
          ))}
        </Box>
        <Box flex={1} />
        <Search />
        <CartButton />
        <Button sx={{ ml: 2 }}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
