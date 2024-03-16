import React from "react";
import { render, screen, act } from "@testing-library/react";
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

describe("Homepage", () => {
  test("renders search bar", async () => {
    await act(async () => {
      render(<Homepage />);
    });
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  test("renders body", async () => {
    await act(async () => {
      render(<Homepage />);
    });
    expect(screen.getByTestId("body")).toBeInTheDocument();
  });
});
