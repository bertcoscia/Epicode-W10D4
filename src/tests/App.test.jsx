import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
import userEvent from "@testing-library/user-event";
import App from "../App";

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

  it("changes card border colour on click", async () => {
    render(<App />);
    const cards = await screen.findAllByRole("listItem");
    const book1 = cards[0];
    const user = userEvent.setup();
    await user.click(book1);
    expect(book1).toHaveClass("border-danger");
  });
});

/* describe("Checks search bar", () => {
  it("return 6 elements if 'song' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "song");
    const filteredBooks = await screen.findAllByRole("listItem");
    expect(filteredBooks).toHaveLength(6);
  });

  it("return 2 elements if 'd&d' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "d&d");
    const filteredBooks = await screen.findAllByRole("listItem");
    expect(filteredBooks).toHaveLength(2);
  });

  it("return 0 elements if 'gerry scotti' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "gerry scotti");
    const filteredBooks = await screen.queryAllByRole("listItem");
    expect(filteredBooks).toHaveLength(0);
  });
});
 */
