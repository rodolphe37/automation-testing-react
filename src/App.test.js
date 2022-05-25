import { render, screen } from "@testing-library/react";
import App from "./App";

test("Form is present in the app", () => {
  render(<App />);
  const formComponent = screen.getByTestId("form");
  expect(formComponent).toBeInTheDocument();
});
