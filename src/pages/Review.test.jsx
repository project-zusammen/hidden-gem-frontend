import React from "react";
import Review from "./Review";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Review", () => {
  test("renders Post", () => {
    render(<Review />);
  });

  test("renders the hero image", () => {
    render(<Review />);

    expect(screen.getByRole("img", { name: /hero-image/i })).toBeInTheDocument();
  });

  test("users can write comment", () => {
    render(<Review />);

    fireEvent.change(screen.getByLabelText(/Write a comment/i), { target: { value: "Nice place!" } });
    expect(screen.getByLabelText(/Write a comment/i).value).toBe("Nice place!");
  });

  test("renders the images", () => {
    render(<Review />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(6);
  });
});
