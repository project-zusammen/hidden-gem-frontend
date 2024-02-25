import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "./index";

test("Render carousel component", () => {
  render(<Carousel />);

  const element = screen.getByText(/New Posts/);
  expect(element).toBeInTheDocument();
});
