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
    <div className="slider-container" data-testid="review-slider">
      <div className="horizontal-cards-container">
        <Slider {...settings}>
          {reviews &&
            reviews.map((review) => {
              return (
                <Cards
                  key={review.id}
                  title={review.title}
                  content={review.content}
                  vote={review.upvotes}
                />
              );
            })}
        </Slider>
      </div>
    </div>
  );
}
