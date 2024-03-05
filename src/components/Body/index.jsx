import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Cards from "../Card";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./styles.css";

const review = "https://hiddengem.pythonanywhere.com/api/review";
const users = "https://jsonplaceholder.typicode.com/users";

export default function Body() {
  const reviewsPerSlide = 3;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(review);
        const data = await response.json();
        const reviewData = data.data;
        const newData = reviewData.map((review) => {
          return {
            title: review.title + " (new)",
            content: review.content + " (new)",
            upvotes: review.upvotes + 1,
            public_id: review.public_id + " (new)",
          };
        });
        setReviews([ ...reviewData, ...newData, ...reviewData, ...newData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: reviewsPerSlide,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  
  return (
    <div className="slider-container" data-testid="review-slider">
      <div className="horizontal-cards-container">
        <Slider {...settings} >
            {reviews.map((review) => {
              return (
                <Cards
                  key = {review.public_id}
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
