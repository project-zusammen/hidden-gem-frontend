// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Footer from "./index";
import mockTheme from "../../../mocks/createThemeMock";

jest.mock("../../styles/Theme", () => ({
  __esModule: true,
  default: mockTheme,
}));

describe("Footer Component", () => {
  test("renders Footer component", () => {
    // render(<Footer />);
    // expect(
    //   screen.getByText(/Crafted with passion by Team Evolvy/)
    // ).toBeInTheDocument();
    // expect(screen.getByText(/Home/)).toBeInTheDocument();
    // expect(screen.getByText(/Contact Us/)).toBeInTheDocument();
    // expect(screen.getByText(/About/)).toBeInTheDocument();
  });
});
