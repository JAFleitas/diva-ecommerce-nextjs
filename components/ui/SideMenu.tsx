import { useContext, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import { AuthContext, UiContext } from "../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  const router = useRouter();
  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search/${searchTerm}`);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toggleSideMenu}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              className="fadeIn"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              type="text"
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={onSearchTerm}
                    aria-label="toggle password visibility"
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {isLoggedIn ? (
            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          ) : null}

          {isLoggedIn && (
            <ListItem button>
              <ListItemIcon>
                <ConfirmationNumberOutlined />
              </ListItemIcon>
              <ListItemText primary={"My orders"} />
            </ListItem>
          )}

          <ListItem
            button
            onClick={() => navigateTo("/category/men")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Men"} />
          </ListItem>

          <ListItem
            button
            onClick={() => navigateTo("/category/women")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={"Women"} />
          </ListItem>

          <ListItem
            button
            onClick={() => navigateTo("/category/children")}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary={"Children"} />
          </ListItem>

          {isLoggedIn ? (
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <LoginOutlined />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          ) : (
            <ListItem
              button
              onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
            >
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
          )}

          {/* Admin */}
          {user?.role === "admin" ? (
            <>
              <Divider />
              <ListSubheader>Admin Panel</ListSubheader>
              <ListItem button>
                <ListItemIcon>
                  <CategoryOutlined />
                </ListItemIcon>
                <ListItemText primary={"Products"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ConfirmationNumberOutlined />
                </ListItemIcon>
                <ListItemText primary={"Orders"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary={"Users"} />
              </ListItem>
            </>
          ) : null}
        </List>
      </Box>
    </Drawer>
  );
};
