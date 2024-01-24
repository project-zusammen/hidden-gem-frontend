import React from "react";
import Upvotes from "./index";
import { render, screen } from "@testing-library/react";

describe("Upvotes Component", () => {
  test("renders Upvotes component", () => {
    render(<Upvotes count={10} />);

    expect(screen.getByText(/Upvotes/)).toBeInTheDocument();
  });
});
