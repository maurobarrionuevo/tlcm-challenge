import { render } from "@testing-library/react";
import GenericModule from "../../components/modules/GenericModule";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("GenericModule", () => {
  it("renders with provided props", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GenericModule name="Test" value="Test value" />
      </ThemeProvider>
    );

    expect(getByText("Test")).toBeInTheDocument();
    expect(getByText("Test value")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GenericModule />
      </ThemeProvider>
    );

    expect(getByText("Generic")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
  });

  it("renders WeatherModule with correct label", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GenericModule name="Test" value="Test value" />
      </ThemeProvider>
    );

    expect(getByText("Test")).toBeInTheDocument();
  });
});
