import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Channel from "./components/Channel";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/video/:id" element={<Videos />} />
          <Route exact path="/channel/:id" element={<Channel />} />
          <Route exact path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
