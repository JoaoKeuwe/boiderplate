import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Main } from "./Main";

describe("<Main />", () => {
  it("renderiza o componente Main com o título dinâmico", () => {
    const title = "Título Dinâmico";
    const paragraph = "Este é um parágrafo de teste.";

    render(<Main title={title} p={paragraph} />);

    expect(
      screen.getByRole("heading", { name: new RegExp(title, "i") })
    ).toBeInTheDocument();
    expect(screen.getByText(new RegExp(paragraph, "i"))).toBeInTheDocument();
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
