import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

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
