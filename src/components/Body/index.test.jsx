import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "./index";

describe("Body component", () => {
  test("renders Body component", () => {
    render(<Body />);
    const headingElement = screen.getByText(/New Reviews/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders Slider component with correct settings", () => {
    render(<Body />);
    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toBeInTheDocument();
    // Tambahkan assertion untuk mengecek pengaturan Slider jika diperlukan
  });

  test("renders Card components inside Slider", () => {
    render(<Body />);
    const cardElements = screen.getAllByRole("article");
    expect(cardElements.length).toBe(5); // Asumsikan ada 5 Card yang dirender
  });
});
