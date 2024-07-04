import { describe, it } from "vitest";
import BookList from "../components/BookList";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";

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

  it("changes card border colour on click", async () => {
    render(<App />);
    const cards = await screen.findAllByRole("listItem");
    const book1 = cards[0];
    /* const user = userEvent.setup();
      await user.click(book1); */
    fireEvent.click(book1);
    expect(book1).toHaveClass("border-danger");
  });

  it("card border goes back to normal after clicking another card", async () => {
    render(<App />);
    const cards = await screen.findAllByRole("listItem");
    const book1 = cards[0];
    const book2 = cards[1];
    /* const user = userEvent.setup();
      await user.click(book1);
      await user.click(book2); */
    fireEvent.click(book1);
    fireEvent.click(book2);
    expect(book1).not.toHaveClass("border-danger");
  });
});
