import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders login form with email and password fields", () => {
    render( 
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInputField = screen.getByTestId("email-field");
    const passwordInputField = screen.getByTestId("password-field");

    expect(emailInputField).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
  });

  test("submits form with provided email and password", () => {
    const emailAddress = 'test@example.com';
    const password = 'password123';

    render( 
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInputField = screen.getByTestId("email-content");
    const passwordInputField = screen.getByTestId("password-content");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(emailInputField, { target: { value: emailAddress } });
    fireEvent.change(passwordInputField, { target: { value: password } });
    fireEvent.click(loginButton);

    expect(emailInputField).toHaveValue(emailAddress);
    expect(passwordInputField).toHaveValue(password);
  });

  test("redirects to signup page when 'Create an account' link is clicked", () => {
    render( 
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const createAccountLink = screen.getByTestId('create-account-link');
    fireEvent.click(createAccountLink);

    expect(createAccountLink).toHaveAttribute("href", "/signup");
  });
});
