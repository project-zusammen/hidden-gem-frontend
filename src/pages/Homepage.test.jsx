import React from "react";
import Homepage from "./Homepage";
import { render, screen } from "@testing-library/react";

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
