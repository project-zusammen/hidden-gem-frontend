import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Homepage", () => {
  test("renders left, center, and right columns", () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );

    expect(screen.getByText(/Left Column/)).toBeInTheDocument();
    expect(screen.getByText(/Right Column/)).toBeInTheDocument();
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
