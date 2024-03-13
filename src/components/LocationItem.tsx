import { CityData } from '../interfaces/api'
import { LocationItemButton, LocationItemStyled } from './LocationItemStyled'
import { trimString } from '../helpers/helpers'
import IconButton from './buttons/IconButton'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export type LocationItemProps = {
    data: CityData
    handleClick: () => void
    selected?: boolean
}

const LocationItem = ({ data, handleClick, selected }: LocationItemProps) => {
    const { name, country, state } = data
    const { addedLocations, setAddedLocations, setSelectedLocation } = useContext(AppContext)

    const removeLocation = () => {
        const filtered = addedLocations.filter(location => location.name !== data.name)
        setAddedLocations(filtered)
        if (addedLocations.length > 0) {
            setSelectedLocation(addedLocations[0])
        }
    }

    return (
        <LocationItemStyled selected={selected}>
            <div className="location">
                <div className="top">
                    <span className="state">{trimString(state || name, 13)}</span>
                    <LocationItemButton onClick={handleClick} className="name">
                        {trimString(name)}
                    </LocationItemButton>
                </div>
            </div>
            <div className="country">
                <IconButton icon="times" onClick={removeLocation} />
                <span>{trimString(country)}</span>
            </div>
        </LocationItemStyled>
    )
}

export default LocationItem