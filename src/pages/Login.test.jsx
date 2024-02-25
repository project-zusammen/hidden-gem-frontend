import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders login form with email and password fields", () => {
    render(<Login />);

    const emailInputField = screen.getByTestId("email-field");
    const passwordInputField = screen.getByTestId("password-field");

    expect(emailInputField).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
  });

  test("submits form with provided email and password", () => {
    const emailAddress = 'test@example.com';
    const password = 'password123';

    render(<Login />);

    const emailInputField = screen.getByTestId("email-content");
    const passwordInputField = screen.getByTestId("password-content");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(emailInputField, { target: { value: emailAddress } });
    fireEvent.change(passwordInputField, { target: { value: password } });
    fireEvent.click(loginButton);

    expect(emailInputField).toHaveValue(emailAddress);
    expect(passwordInputField).toHaveValue(password);
  });
});
