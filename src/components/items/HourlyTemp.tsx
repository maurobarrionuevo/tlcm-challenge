import { extractHourAndMinutes, trimDecimal } from '../../helpers/helpers'
import { DailyForecast } from '../../interfaces/api'
import { HourlyTempStyled } from './HourlyTempStyled'

type Props = {
    day: DailyForecast
}

const HourlyTemp = ({day}: Props) => {
    return (
        <HourlyTempStyled id={"hourly-temp"}>
            <span className="hour">{extractHourAndMinutes(day.dt_txt)}</span>
            <span className="sky"><img width={30} src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.weather[0].main} /></span>
            <span className="temp"><strong>{`${trimDecimal(day.main.temp)}°`}</strong></span>
        </HourlyTempStyled>
    )
}

export default HourlyTemp