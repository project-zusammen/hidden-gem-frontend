import { Container, Grid } from "@mui/material";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <>
      <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <div style={{ backgroundColor: "#f0f0f0", height: "100vh" }}>Left Column</div>
          </Grid>

          <Grid item xs={4}>
            <div style={{ backgroundColor: "#e0e0e0", height: "100vh" }}>
              <Card />
            </div>
          </Grid>

          <Grid item xs={4}>
            <div style={{ backgroundColor: "#d0d0d0", height: "100vh" }}>Right Column</div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
