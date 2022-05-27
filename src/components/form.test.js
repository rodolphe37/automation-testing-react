import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

test("Should be able to type email", () => {
  render(<Form />);
  const emailComponent = screen.getByLabelText(/email address/i);
  expect(emailComponent).toBeInTheDocument();
  expect(emailComponent.value).toBe("");
  userEvent.type(emailComponent, "rodolphe.a@gmail.com");
  expect(emailComponent.value).toBe("rodolphe.a@gmail.com");
});

test("Should be able to type password", () => {
  render(<Form />);
  const passwordComponent = screen.getByLabelText("Password");
  expect(passwordComponent).toBeInTheDocument();
  expect(passwordComponent.value).toBe("");
  userEvent.type(passwordComponent, "123456");
  expect(passwordComponent.value).toBe("123456");
});

test("Should be able to type confirm password", () => {
  render(<Form />);
  const formComponent = screen.getByLabelText(/Confirm Password/i);
  expect(formComponent).toBeInTheDocument();
  expect(formComponent.value).toBe("");
  userEvent.type(formComponent, "123456");
  expect(formComponent.value).toBe("123456");
});

test("Should show email error message on validation", () => {
  render(<Form />);
  const emailErrorElement = screen.queryByText(
    /the email you input is invalid/i
  );
  const emailInputElement = screen.getByTestId("email");
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  expect(emailErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, "rodolphegmail.com");

  userEvent.click(submitBtnElement);

  const emailErrorElementAgain = screen.queryByText(
    /the email you input is invalid/i
  );

  expect(emailErrorElementAgain).toBeTruthy();
});

test("Should show password & confirm password is not equal on validation", () => {
  render(<Form />);
  const passwordErrorElement = screen.queryByText(/Your password do no match/i);

  const passwordInputElement = screen.queryByTestId("password");
  const confirmPasswordInputElement = screen.queryByTestId("password2");

  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  expect(passwordErrorElement).not.toBeInTheDocument();

  userEvent.type(passwordInputElement, "123");

  userEvent.type(confirmPasswordInputElement, "321");

  userEvent.click(submitBtnElement);

  const passwordErrorElementAgain = screen.getByText(
    /Your password do no match/i
  );

  expect(passwordErrorElementAgain).toBeTruthy();
});
