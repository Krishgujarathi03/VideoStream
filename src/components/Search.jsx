import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Api } from "../utils/Api";
import Video from "./Video";

function Search() {
  const [videos, setVideos] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    Api(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>

        <Box display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          {<Video videos={videos} />}
        </Box>
      </Box>
    </>
  );
}

export default Search;
