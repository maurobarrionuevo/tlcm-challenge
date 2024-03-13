import styled from "styled-components"
import WeatherModule from "../WeatherModule"

type Props = {
  name?: string
  value?: string
}

const GenericModule = ({name, value}: Props) => {
  return (
    <WeatherModule label={name}>
        <GenericModuleStyled>
            {value}
        </GenericModuleStyled>
    </WeatherModule>
  )
}

export default GenericModule


const GenericModuleStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  font-weight: bold;
  font-size:22px;
`

GenericModule.defaultProps = {
  name: 'Generic',
  value: '-'
}