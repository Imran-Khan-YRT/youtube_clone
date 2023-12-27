import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const hanleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) navigate(`/search/${searchTerm}`);
  };
  return (
    <Paper
      component="form"
      onSubmit={hanleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e2e2e3",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 }
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "red"
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
