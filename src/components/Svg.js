import { Box } from "@mui/material";
import React from "react";

function Svg() {
  return (
    <Box>
      <h1>My first SVG</h1>

      <svg width="300" height="100">
        <rect width="300" height="100" style={{ color: "black" }} />
      </svg>
    </Box>
  );
}

export default Svg;
