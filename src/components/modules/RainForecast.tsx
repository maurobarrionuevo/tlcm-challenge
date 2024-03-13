import styled from "styled-components"
import WeatherModule from "../WeatherModule"

// type Props = {}

const RainForecast = () => {
  return (
    <WeatherModule className="rain-forecast" label={"Rain forecast"}>
      <RainForecastStyled>
        <div className="hola">hola</div>
      </RainForecastStyled>
    </WeatherModule>
  );
}

export default RainForecast


const RainForecastStyled = styled.div`

`