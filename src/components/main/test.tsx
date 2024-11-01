import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Main } from "./index";

describe("<Main />", () => {
  it("renderizou a main", () => {
    render(<Main />);
    expect(screen.getByRole("heading", { name: /deu/i })).toBeInTheDocument();
  });
  it("should have the correct background color", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyleRule("background-color", "#06092b");
  });

  it("should have the correct color", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyleRule("color", "#fff");
  });
});
