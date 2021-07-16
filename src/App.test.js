import React, { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders app name link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.findByText("Lords_Mobile_Tools");
  expect(linkElement).toBeDefined();
});




