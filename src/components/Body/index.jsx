import React from "react";
import Card from "../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    // <Grid container spacing={3} marginTop={5} marginBottom={13}>
    //   {/* Main Content Sections */}
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={8}></Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={8}>
    //     <Typography variant="h1" gutterBottom textAlign={"center"}>
    //       New Posts
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={8}>
    //     <Grid container spacing={2} xs={12}>
    //       <Grid item xs={3}>
    //         <Card>{/* Card content here */}</Card>
    //       </Grid>
    //       <Grid item xs={3}>
    //         <Card>{/* Card content here */}</Card>
    //       </Grid>
    //       <Grid item xs={3}>
    //         <Card>{/* Card content here */}</Card>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={2}></Grid>
    //   <Grid item xs={4} md={4} lg={8}></Grid>
    //   {/* <Grid item xs={4} md={4} lg={2}></Grid> */}
    // </Grid>
    <>
      <h1 className="body-post">New Reviews</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Body;
