import styled from "styled-components"
import { WeatherDataResponse } from "../../interfaces/api"
import { trimDecimal } from "../../helpers/helpers"

type Props = {
  data: WeatherDataResponse
}

const MainData = ({data}: Props) => {
    const { main, name, weather } = data
    const { temp, temp_max, temp_min} = main
    return (
        <MainDataStyled className="main-data">
            <span className="location">{name}</span>
            <span className="temp">{`${trimDecimal(temp)}°`}</span>
            <span className="sky">{weather[0].description}</span>
            <span className="minmax">{`Max: ${trimDecimal(temp_max)}° - Min:${trimDecimal(temp_min)}°`}</span>
        </MainDataStyled>
    )
}

export default MainData

const MainDataStyled = styled.div`
    grid-column: 1/-1;
    grid-row: 1/1;
    text-align: center;
    color:white;
    padding:5px 0;
    span{
      display: block;
      margin:0;
      padding:0;
    }
    .location{
        font-size:25px;
        line-height:28px;
        text-transform: capitalize;
    }
    .temp{
        font-size:50px;
        font-weight:bold;
        line-height:60px;
    }
    .sky{
        font-size: 16px;
        line-height:20px;
        text-transform: capitalize;
    }
    .minmax{
        font-size:14px;
        line-height:25px;
    }
`