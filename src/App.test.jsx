/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable testing-library/await-async-query */
import React, { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders app name link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.findByText("Lords_Mobile_Tools");
  expect(linkElement).toBeInTheDocument();
});




