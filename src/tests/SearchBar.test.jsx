import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import userEvent from "@testing-library/user-event";

describe("Checks search bar", () => {
  it("return 6 elements if 'song' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "song");
    const filteredBooks = await screen.findAllByRole("listitem");
    expect(filteredBooks).toHaveLength(6);
  });

  it("return 2 elements if 'd&d' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "d&d");
    const filteredBooks = await screen.findAllByRole("listitem");
    expect(filteredBooks).toHaveLength(2);
  });

  it("return 0 elements if 'gerry scotti' is typed in the input field", async () => {
    render(<BookList />);
    const inputField = screen.getByPlaceholderText("Search");
    const user = userEvent.setup();
    await user.type(inputField, "gerry scotti");
    const filteredBooks = await screen.queryAllByRole("listitem");
    expect(filteredBooks).toHaveLength(0);
  });
});
