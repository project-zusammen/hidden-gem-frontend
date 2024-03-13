import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./index";

describe("Body component", () => {
  test("renders Body component", () => {
    render(<Body />);
    const headingElement = screen.getByText(/New Reviews/i);
    expect(headingElement).toBeInTheDocument();
  });
});
