import { trimDecimal } from "../../helpers/helpers"
import { GroupedDailyForecast } from "../../interfaces/api"
import { DailyTempsStyled } from "./DailyTempsStyled"


type Props = {
    day: GroupedDailyForecast,
    max: number,
    min: number
}

const DailyTemps = ({day, max, min}: Props) => {

    const v1 = (day.minTemp / min) * 10
    const v2 = (day.maxTemp * 100) / max
    const width = ( v2 - v1 )

    return (
      <DailyTempsStyled range={width} data-testid="daily-temps">
        <span className="day">{day.dayOfWeek}</span>
        <div className="sky">
          <img
            width="30"
            src={`http://openweathermap.org/img/w/${day.mostProminentWeather.icon}.png`}
            alt={day.mostProminentWeather.main}
          />
        </div>
        <span className="lo">{`${trimDecimal(day.minTemp)}°`}</span>
        <div className="temperature-bar">
          <div className="temp-range"></div>
        </div>
        <span className="hi">{`${trimDecimal(day.maxTemp)}°`}</span>
      </DailyTempsStyled>
    );
}

export default DailyTemps