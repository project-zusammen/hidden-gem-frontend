/* eslint-disable react/prop-types */
import React from "react";
import { IconButton, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Upvotes = ({ count }) => {
  return (
    <>
      <IconButton sx={{ color: "green" }}>
        <ArrowCircleUpIcon />
      </IconButton>
      <Typography variant="body2">{count} Upvotes</Typography>
      <IconButton sx={{ color: "red" }}>
        <ArrowCircleDownIcon />
      </IconButton>
    </>
  );
};

export default Upvotes;
