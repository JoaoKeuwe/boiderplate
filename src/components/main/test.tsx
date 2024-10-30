import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Main } from "./index";

describe("<Main />", () => {
  it("renderizou a main", () => {
    render(<Main />);
    expect(screen.getByRole("heading", { name: /deu/i })).toBeInTheDocument();
  });
});
