import { FC, useContext, useState } from "react";
import { ClearOutlined, SearchOutlined } from "@mui/icons-material";
import { IconButton, Input, InputAdornment } from "@mui/material";
import { UiContext } from "../../context";
import { useRouter } from "next/router";

interface Props {
  isSearchVisible: boolean;
  setIsSearchVisible: (arg: boolean) => void;
}
export const Search: FC<Props> = ({ isSearchVisible, setIsSearchVisible }) => {
  const { toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useRouter();
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    push(`/search/${searchTerm}`);
  };
  return (
    <>
      {/* mobile */}
      <IconButton
        onClick={toggleSideMenu}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <SearchOutlined />
      </IconButton>
      {/* desktop */}

      {isSearchVisible ? (
        <Input
          className="fadeIn"
          sx={{ display: { xs: "none", sm: "flex" } }}
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
          type="text"
          placeholder="Search..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setIsSearchVisible(false)}
                aria-label="toggle password visibility"
              >
                <ClearOutlined />
              </IconButton>
            </InputAdornment>
          }
        />
      ) : (
        <IconButton
          className="fadeIn"
          onClick={() => setIsSearchVisible(true)}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <SearchOutlined />
        </IconButton>
      )}
    </>
  );
};
