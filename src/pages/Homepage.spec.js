import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

jest.mock("../api/category", () => ({
  getCategory: jest.fn(() =>
    // eslint-disable-next-line no-undef
    Promise.resolve({
      data: [
        { public_id: "1", name: "Category 1" },
        { public_id: "2", name: "Category 2" },
      ],
    })
  ),
}));

jest.mock('../api/review', () => ({
  getReview: jest.fn(() => Promise.resolve({ data: 
    [
      { public_id: '1', category_id: 'Category 1', title: 'Title 1', content: 'Content 1', location: 'Location 1' }, 
      { public_id: '2', category_id: 'Category 2', title: 'Title 2', content: 'Content 2', location: 'Location 2'}
    ] 
  })),
}));

describe("Homepage", () => {
  test("renders search bar", () => {
    render(<Homepage />);
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });
  test("renders body", () => {
    render(<Homepage />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
  });
});
