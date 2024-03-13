import { CityData } from '../interfaces/api'
import { LocationItemStyled } from './LocationItemStyled'
import { trimString } from '../helpers/helpers'

export type LocationItemProps = {
    data: CityData
    handleClick: () => void
    selected?: boolean
}

const LocationItem = ({data, handleClick, selected}: LocationItemProps) => {

    const { name, country, state } = data;

    return (
        <LocationItemStyled onClick={handleClick} selected={selected}>
            <div className="location">
                <div className="top">
                    <span className='state'>{trimString(state || name, 13)}</span>
                    <span className='name'>{trimString(name)}</span>
                </div>
            </div>
            <div className="country">
                <span>{trimString(country)}</span>
            </div>
        </LocationItemStyled>
    )
}

export default LocationItem