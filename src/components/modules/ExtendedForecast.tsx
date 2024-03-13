import styled from "styled-components"
import WeatherModule from "../WeatherModule"
import DailyTemps from "../items/DailyTemps"
import { GroupedWeeklyForecast } from "../../interfaces/api"

type Props = {
  weeklyForecast: GroupedWeeklyForecast
}

const ExtendedForecast = ({weeklyForecast}: Props) => {
    return (
        <WeatherModule className="extended-forecast" label={"Partly conditions from 06:00 to 09:00."}>
            <ExtendedForecastStyled>
                {
                    weeklyForecast.days.map((day) => {
                        return(
                            <DailyTemps key={day.dayOfWeek} day={day} max={weeklyForecast.maxTemp} min={weeklyForecast.minTemp}/>
                        )
                    })
                }
            </ExtendedForecastStyled>
        </WeatherModule>
    )
}

export default ExtendedForecast


const ExtendedForecastStyled = styled.div`

`