import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders login form with email and password fields", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders "Create an account" link', () => {
    render(<Login />);

    const createAccountLink = screen.getByText("Create an account.");

    expect(createAccountLink).toBeInTheDocument();
    expect(createAccountLink).toHaveAttribute("href", "/signup");
  });

  test("submits form with provided email and password", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByText("Log in");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
  });
});
