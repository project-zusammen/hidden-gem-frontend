/* eslint-disable testing-library/no-node-access */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "./SignUp";

describe("Signup", () => {
  test("renders signup form with email and password fields", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const usernameInputField = screen.getByTestId("username-field");
    const emailInputField = screen.getByTestId("email-field");
    const passwordInputField = screen.getByTestId("password-field");

    expect(usernameInputField).toBeInTheDocument();
    expect(emailInputField).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
  });

  test("submits form with provided username, email and password", () => {
    const username = "johndoe";
    const emailAddress = "john@example.com";
    const password = "john_doe";

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const usernameInputField = screen.getByTestId("username-field").querySelector("input");
    const emailInputField = screen.getByTestId("email-field").querySelector("input");
    const passwordInputField = screen.getByTestId("password-field").querySelector("input");
    const signupButton = screen.getByTestId("signup-button");

    fireEvent.change(usernameInputField, { target: { value: username } });
    fireEvent.change(emailInputField, { target: { value: emailAddress } });
    fireEvent.change(passwordInputField, { target: { value: password } });
    fireEvent.click(signupButton);

    expect(usernameInputField).toHaveValue(username);
    expect(emailInputField).toHaveValue(emailAddress);
    expect(passwordInputField).toHaveValue(password);
  });

  test("redirects to login page when 'Login' link is clicked", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const loginLink = screen.getByTestId("login-link");
    fireEvent.click(loginLink);

    expect(loginLink).toHaveAttribute("href", "/login");
  });

  test("should mask password input", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordInputField = screen.getByTestId("password-field").querySelector("input");

    expect(passwordInputField).toHaveAttribute("type", "password");
  });

  test("should show password when 'show-password' icon is clicked", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordInputField = screen.getByTestId("password-field").querySelector("input");
    const showPasswordIcon = screen.getByTestId("show-password");

    fireEvent.click(showPasswordIcon);

    expect(passwordInputField).toHaveAttribute("type", "text");
  });
});
