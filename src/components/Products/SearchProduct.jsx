import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const SearchProduct = ({ searchQuery, setSearchQuery }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    textAlign: "right",
    width: "70%",
    // "& .MuiInputBase-input": {
    //   // padding: theme.spacing(1, 1, 1, 0),
    //   // paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    //   // transition: theme.transitions.create("width"),
    //   [theme.breakpoints.up("md")]: {
    //     width: "15ch",
    //   },
    // },
  }));

  return (
    <Search method="get">
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="search"
        id="productSearch"
        placeholder="جست و جو ..."
        // inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchProduct;
