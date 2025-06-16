import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("welcome", () => {
  it("Must return a greeting message with the name of the creator, who's me", () => {
    window.alert = jest.fn();
    render(<App />);
    const botao = screen.getByText(/Boas vindas/i);
    fireEvent.click(botao);

    expect(window.alert).toHaveBeenCalledWith(
      "Seja bem vindo Cauan ao Dio Bank"
    );
  });
});
