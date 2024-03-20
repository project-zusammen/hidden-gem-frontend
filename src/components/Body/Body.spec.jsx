import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./index";

describe("Body component", () => {
  test("renders Body component", () => {
    render(<Body />);
    const newReviewsTitle = screen.getByTestId("new-reviews-title");
    expect(newReviewsTitle).toBeInTheDocument();
  });

  test("renders Slider component with correct settings", () => {
    render(<Body />);
    const reviewSlider = screen.getByTestId("review-sliders");
    expect(reviewSlider).toBeInTheDocument();
  });
});
