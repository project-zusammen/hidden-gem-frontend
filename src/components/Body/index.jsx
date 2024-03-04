import Slider from "react-slick";
import Cards from "../Card";
import { useEffect, useState } from "react";

const review = "https://hiddengem.pythonanywhere.com/api/review";
const users = "https://jsonplaceholder.typicode.com/users";

export default function index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(review);
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          {products.map((product) => {
            return (
              <>
                <Cards
                  title={product.title}
                  content={product.content}
                  vote={product.upvotes}
                />
              </>
            );
          })}
        </div>
      </Slider>
      ;
    </div>
  );
}
