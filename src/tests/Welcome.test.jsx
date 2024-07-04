import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import { describe, expect, it } from "vitest";

describe("Checks Welcome.jsx ", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    const heading = screen.getAllByText(/welcome to epibooks/i);
    expect(heading).toBeInTheDocument;
  });
});
