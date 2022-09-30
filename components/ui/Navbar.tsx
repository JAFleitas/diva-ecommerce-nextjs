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
import { useRouter } from "next/router";
import { UiContext } from "../../context";
import { useContext, useState } from "react";

const categories: string[] = ["men", "women", "children"];

export const Navbar = () => {
  const { pathname } = useRouter();

  const { toggleSideMenu } = useContext(UiContext);
  const [isSearchVisible, setisSearchVisible] = useState(false);
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
        <Box
          className="fadeIn"
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
        >
          {categories.map((category, index) => (
            <LinkComponent key={index} href={`/category/${category}`}>
              <Button
                color={
                  pathname === `/category/${category}` ? "secondary" : "info"
                }
                sx={{
                  margin: "0px 4px",
                }}
              >
                {capitalize(category)}
              </Button>
            </LinkComponent>
          ))}
        </Box>
        <Box flex={1} />
        <Search
          isSearchVisible={isSearchVisible}
          setIsSearchVisible={setisSearchVisible}
        />
        <CartButton />
        <Button onClick={toggleSideMenu} sx={{ ml: 2 }}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};
