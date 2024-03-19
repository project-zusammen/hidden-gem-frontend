import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Cards from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { getReview } from "../../api/review";

export default function Body() {
  const reviewsPerSlide = 3;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getReview();
      setReviews(data.data);
    })();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: reviewsPerSlide,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  console.log(reviews);
  return (
<<<<<<<<< Temporary merge branch 1
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
=========
    <Grid data-testid="body" container spacing={3} marginTop={5} marginBottom={13}>
      {/* Main Content Sections */}
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
        <Typography variant="h1" gutterBottom textAlign={"center"}>
          New Reviews
        </Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
    </Grid>
>>>>>>>>> Temporary merge branch 2
  );
}
