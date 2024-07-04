import { describe, expect } from "vitest";
import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";

describe("Welcome component mounts", () => {
  it("mounts the component correctly", () => {
    render(<Welcome />);
    screen.debug();
    const heading = screen.getByText(/welcome to epibooks/i);
    expect(heading).toBeInTheDocument;
  });
});
