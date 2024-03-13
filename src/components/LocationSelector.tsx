import { useContext, useEffect, useState } from "react"
import LocationItem from "./LocationItem"
import IconButton from "./buttons/IconButton"
import EmptyBlock from "./misc/EmptyBlock"
import { LocationSelectorStyled, SearchInput } from "./modules/LocationSelectorStyled"
import { AppContext } from "../context/AppContext"
import { getGeocoding } from "../api/weather"
import { CityData } from "../interfaces/api"


const LocationSelector = () => {

    const { addedLocations, setAddedLocations , selectedLocation} = useContext(AppContext)
    const [search, setSearch] = useState<string>('')
    const [searching, setSearching] = useState(false)
    const [results, setResults] = useState<CityData[] | undefined>(undefined)
    const { setSelectedLocation, showMenu } = useContext(AppContext)

    const handleSelectLocation = (location:CityData) => {
        setSelectedLocation(location);
    };

    const handleAddNewLocation = (location:CityData) => {
        setAddedLocations((prev) => {
            if (!prev.some((item) => item.name === location.name)) {
                setSelectedLocation(location);
                return [...prev, location];
            }
            return [...prev];
        });
        setResults(undefined)
        setSearch('')
    }

    const handleSearchChange = (value: string) => {
        setSearch(value);
    };

    useEffect(() => {
        setSearching(true)
        const debounceTimer = setTimeout(async () => {
            try {
                if (search.trim() !== '') {
                    const results = await getGeocoding(search);
                    setResults(results)
                }
            } catch (error) {
                console.error('Error fetching geocoding data', error);
            } finally {
                setSearching(false)
            }
        }, 1000);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [search]);

    return (
        <LocationSelectorStyled showMenu={showMenu}>
            <div className="heading">
                <SearchInput 
                type="text" 
                value={search} 
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search a new location"/>
                <IconButton 
                onClick={() => console.log('some')} 
                icon={searching ? 'spinner' : 'magnifying-glass'} 
                spin={searching ? true : false} 
                title={"Add new location"}/>
            </div>
            {(addedLocations && !results) && <div className="locations">
                {
                    addedLocations.map((loc) => {
                        return(
                            <LocationItem 
                            key={loc.lat} 
                            data={loc} 
                            handleClick={() => handleSelectLocation(loc)}
                            selected={loc.lat === selectedLocation?.lat}
                            />
                        )
                    })
                }
            </div>}
            {!addedLocations && <EmptyBlock copy="There are no locations available. Start adding one." />}
            {results && <div className="locations">
                {
                    results.map((loc) => {
                        return(
                            <LocationItem 
                            key={loc.lat} 
                            data={loc} 
                            handleClick={() => handleAddNewLocation(loc)}
                            />
                        )
                    })
                }    
            </div>}
        </LocationSelectorStyled>
    )
}

export default LocationSelector