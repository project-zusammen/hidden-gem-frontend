import React from "react";
import Homepage from "./Homepage";
import { render, screen } from "@testing-library/react";

describe("Homepage", () => {
  test("renders Homepage", () => {
    render(<Homepage />);
  });

  test("renders left, center, and right columns", () => {
    render(<Homepage />);

    expect(screen.getByText(/Left Column/)).toBeInTheDocument();
    expect(screen.getByText(/Right Column/)).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
