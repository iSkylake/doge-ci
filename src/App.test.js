import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should renders doge button", () => {
    render(<App />);
    const button = screen.getByText("DOGE CI");
    expect(button).toBeInTheDocument();
  });

  it("should renders meadow button", () => {
    render(<App />);
    const meadowButton = screen.getByText("MEADOW");
    expect(meadowButton).toBeInTheDocument();
  });
});
