import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("Checks Welcome.jsx ", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    const heading = screen.getByText(/welcome to epibooks/i);
    expect(heading).toBeInTheDocument;
  });
});

describe("Checks BookList.jsx", () => {
  it("generates as many cards as the number of elements in array", async () => {
    render(<BookList />);
    const cards = await screen.findAllByRole("listItem");
    const fantasyLenght = fantasy.length;
    expect(cards).toHaveLength(fantasyLenght);
  });

  it("mounts CommentArea.jsx correctly", () => {
    render(<BookList />);
    const commentArea = screen.getByTestId("commentArea");
    expect(commentArea).toBeInTheDocument;
  });
});
