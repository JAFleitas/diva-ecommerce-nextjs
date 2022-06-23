import NextLink from "next/link";
import { AppBar, Link, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link></Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
