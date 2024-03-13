import { WeatherModuleStyled } from './WeatherModuleStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'
// Make Jest happy
import '../assets/icons/library'

type Props = {
    icon?: IconName
    label: string
    children?: ReactNode
    className?: string
    padding?: boolean
}

const WeatherModule = ({ icon, label, children, className, padding = true }: Props) => {
    return (
        <WeatherModuleStyled className={className} padding={padding}>
            <div className="header">
                {icon && <FontAwesomeIcon className="icon" icon={icon} />}
                {label}
            </div>
            <div className="component">{children}</div>
        </WeatherModuleStyled>
    )
}

export default WeatherModule

WeatherModule.defaultProps = {
    label: "No information",
    icon: 'circle-exclamation'
}