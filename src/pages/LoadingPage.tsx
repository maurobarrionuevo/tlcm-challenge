import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { DefaultTheme } from 'styled-components'

const LoadingPage = () => {
  return (
    <LoadingPageStyled>
        <FontAwesomeIcon icon={'spinner'} spin/>
    </LoadingPageStyled>
  )
}

export default LoadingPage


const LoadingPageStyled = styled.div<{theme: DefaultTheme}>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size:16px;
    font-weight: bold;
    background-color: #2E3955;
`