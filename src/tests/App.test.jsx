import { describe, expect } from "vitest";
import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Checks App.jsx", () => {
  it("doesn't render any SingleComment if a book is not selected", async () => {
    render(<App />);
    const comments = screen.queryAllByRole("comment");
    expect(comments).toHaveLength(0);
  });

  it("displays comments when a book with available reviews is clicked", async () => {
    render(<App />);
    const cards = await screen.findAllByRole("listitem");
    const book1 = cards[0];
    fireEvent.click(book1);
    const comments = await screen.findAllByRole("comment");
    expect(comments.length).toBeGreaterThan(0);
  });
});
