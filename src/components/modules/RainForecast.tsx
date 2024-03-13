import styled from "styled-components"
import WeatherModule from "../WeatherModule"

// type Props = {}

const RainForecast = () => {
  return (
    <WeatherModule className="rain-forecast" label={"Partly conditions from 06:00 to 09:00"}>
        <RainForecastStyled>
            <div className="hola">
                hola
            </div>
        </RainForecastStyled>
    </WeatherModule>
  )
}

export default RainForecast


const RainForecastStyled = styled.div`

`