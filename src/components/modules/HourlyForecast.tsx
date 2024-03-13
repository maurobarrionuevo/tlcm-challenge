import styled from "styled-components"
import WeatherModule from "../WeatherModule"
import HourlyTemp from "../items/HourlyTemp"
import { DailyForecast } from "../../interfaces/api"

type Props = {
  forecast: DailyForecast[]
}

const HourlyForecast = ({forecast}: Props) => {
    return (
        <WeatherModule className="hourly-forecast" label={"Partly conditions from 06:00 to 09:00, with mostly cloudy conditions"}>
            <HourlyForecastStyled>
                {
                    forecast.map((day: DailyForecast) => {
                        return(
                            <HourlyTemp key={day.dt} day={day}/>
                        )
                    })
                }
            </HourlyForecastStyled>
        </WeatherModule>
    )
}

export default HourlyForecast


const HourlyForecastStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    @media only screen and (min-width : 550px) {
        flex-direction: row;
    }
`