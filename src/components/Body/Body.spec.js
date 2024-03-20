import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./index";

jest.mock('../../api/review', () => ({
  getCategory: jest.fn(() => Promise.resolve({ data: [{ public_id: '1', name: 'Category 1' }, { public_id: '2', name: 'Category 2' }] })),
}));

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
