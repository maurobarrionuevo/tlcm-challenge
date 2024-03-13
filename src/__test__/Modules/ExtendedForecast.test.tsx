import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import ExtendedForecast from "../../components/modules/ExtendedForecast";
import GroupedWeeklyForecast from "../__mock__/GroupedWeeklyForecast.json";

describe("ExtendedForecast", () => {
  it("Renders with weekly forecast", () => {
    const { getByText, getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <ExtendedForecast weeklyForecast={GroupedWeeklyForecast} />
      </ThemeProvider>
    );
    expect(getByText("Daily forecast")).toBeInTheDocument();
    expect(getAllByTestId("daily-temps")).toHaveLength(
      GroupedWeeklyForecast.days.length
    );
  });
});
