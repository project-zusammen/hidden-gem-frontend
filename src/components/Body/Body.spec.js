import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./index";

jest.mock('../../api/review', () => ({
  getReview: jest.fn(() => Promise.resolve({ data: 
    [
      { public_id: '1', category_id: 'Category 1', title: 'Title 1', content: 'Content 1', location: 'Location 1' }, 
      { public_id: '2', category_id: 'Category 2', title: 'Title 2', content: 'Content 2', location: 'Location 2'}
    ] 
  })),
}));

describe("Body component", () => {
  test("renders Body component", () => {
    render(<Body />);
    const newReviewsTitle = screen.getByTestId("new-reviews-title");
    expect(newReviewsTitle).toBeInTheDocument();
  });

  test("renders Slider component with correct settings", () => {
    render(<Body />);
    const reviewSlider = screen.getByTestId("review-slider");
    expect(reviewSlider).toBeInTheDocument();
  });
});
