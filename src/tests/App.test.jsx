import { describe, expect } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Checks App.jsx", () => {
  it("doesn't render any SingleComment if a book is not selected", async () => {
    render(<App />);
    const comments = screen.queryAllByRole("listgroup-item");
    expect(comments).toHaveLength(0);
  });
});
