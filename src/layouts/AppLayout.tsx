import { ReactNode, useContext } from "react"
import styled from "styled-components"
import LocationSelector from "../components/LocationSelector"
import IconButton from "../components/buttons/IconButton"
import { AppContext } from "../context/AppContext"

interface IProps {
    children: ReactNode
}

const AppLayout = ({children}:IProps) => {
    
    const { showMenu, setShowMenu } = useContext(AppContext)

    return (
        <AppContainer>
            <LocationSelector />
            <div className="current-weather">
                {children}
            </div>
            <div className="hamb-btn">
                <IconButton 
                    onClick={() => setShowMenu((prev) => !prev)} 
                    icon={showMenu ? 'times' : 'bars'}
                />
            </div>
        </AppContainer>
    )
}
    
export default AppLayout
    
    
const AppContainer = styled.main`
    overflow: hidden;
    display: flex;
    width: 100%;
    min-height: 100%;
    position: relative;
    .current-weather{
        background-color: ${({theme}) => theme.color.primary};
        flex:1; 
    }
    .hamb-btn{
        position: absolute;
        top:25px;
        right:25px;
        .icon{
            font-size:22px;
        }
    }
`