import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./index";

test("Render search component", () => {
  render(<SearchBar />);
});
