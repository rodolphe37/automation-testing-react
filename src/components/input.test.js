import { render, screen } from "@testing-library/react";
import Input from "./formComponents/Input";

test("Inputs sould be initially empty", () => {
  render(<Input />);
  const InputElements = screen.getByRole("textbox");
  expect(InputElements.value).toBe("");
});
