import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { Geolocation } from "../interfaces/app";
import { CityData } from "../interfaces/api";
import { getAddedLocationsFromStorage, getSelectedLocationFromStorage } from "../helpers/helpers";

interface IAppContext {
    navLocation: Geolocation | null
    setNavLocation: Dispatch<SetStateAction<Geolocation | null>>
    addedLocations: CityData[]
    setAddedLocations: Dispatch<SetStateAction<CityData[]>>
    selectedLocation: CityData | undefined
    setSelectedLocation: Dispatch<SetStateAction<CityData | undefined>>
    ready:boolean,
    setReady: Dispatch<SetStateAction<boolean>>
    showMenu:boolean,
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({children}:{children:ReactNode}) => {

    const [navLocation, setNavLocation] = useState<Geolocation | null>(null)
    const [addedLocations, setAddedLocations] = useState<CityData[]>(getAddedLocationsFromStorage() || []);
    const [selectedLocation, setSelectedLocation] = useState<CityData | undefined>(getSelectedLocationFromStorage() || undefined)
    const [showMenu, setShowMenu] = useState(true)
    const [ready, setReady] = useState<boolean>(true)


    const value: IAppContext = {
        navLocation,
        setNavLocation,
        addedLocations,
        setAddedLocations,
        selectedLocation,
        setSelectedLocation,
        ready,
        setReady,
        showMenu,
        setShowMenu
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider