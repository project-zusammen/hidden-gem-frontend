import React from "react";
import { Container, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Body from "../components/Body";

const Homepage = () => {
  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={10} lg={8}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={10} lg={8} xl={6} justifyContent="center">
          <Body />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ height: "200px" }} />
    </Container>
  );
};

export default Homepage;
