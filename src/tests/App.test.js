import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders the App", () => {
  const { container } = render(<App />);
  const appElement = container.querySelector(".rune-mastery");
  expect(appElement).toBeInTheDocument();
});
