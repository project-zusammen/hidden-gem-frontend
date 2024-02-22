import React from "react";
import { Container, Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Body from "../components/Body";

const Homepage = () => {
  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <SearchBar />
          <Body /> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
