import React from "react";
import Post from "./Post";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Post", () => {
  test("renders Post", () => {
    render(<Post />);
  });

  test("renders the hero image", () => {
    render(<Post />);

    expect(screen.getByRole("img", { name: /hero-image/i })).toBeInTheDocument();
  });

  test("users can write comment", () => {
    render(<Post />);

    fireEvent.change(screen.getByLabelText(/Write a comment/i), { target: { value: "Nice place!" } });
    expect(screen.getByLabelText(/Write a comment/i).value).toBe("Nice place!");
  });

  test("renders the images", () => {
    render(<Post />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(6);
  });
});
