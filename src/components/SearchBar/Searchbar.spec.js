import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./index";

jest.mock('../../api/category', () => ({
  getCategory: jest.fn(() => Promise.resolve({ data: [{ public_id: '1', name: 'Category 1' }, { public_id: '2', name: 'Category 2' }] })),
}));

describe("SearchBar Component", () => {
  it("renders search bar component", () => {
    render(<SearchBar />);

    const searchBar = screen.getByTestId("search-bar");
    const labelSearch = screen.getByTestId("label-search");
    const searchButton = screen.getByTestId("search-button");

    expect(searchBar).toBeInTheDocument();
    expect(labelSearch).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("renders category tabs", async () => {
    render(<SearchBar />);

    await screen.findByTestId("category-tabs");

    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });
});