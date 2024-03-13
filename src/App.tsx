import AppRouter from './router/AppRouter'
import { ThemeProvider } from 'styled-components'
import './styles/styles.scss'
import './assets/icons/library'
import { useGeolocation } from './hooks/useGeolocation'
import { useContext, useEffect } from 'react'
import { getAddedLocationsFromStorage, updateSelectedLocationToStorage } from './helpers/helpers'
import { AppContext } from './context/AppContext'
import theme from './styles/theme'
import { Analytics } from '@vercel/analytics/react'

function App() {

    useGeolocation()
    const { selectedLocation , setSelectedLocation } = useContext(AppContext)

     /* Check for stored locations and set the selected location if none is set. */
    useEffect(() => {
        const storedLocations = getAddedLocationsFromStorage();
        if (!selectedLocation && storedLocations.length > 0) {
            setSelectedLocation(storedLocations[0]);
        }
    },[selectedLocation, setSelectedLocation])

    /* Update localstorage with selected location */
    useEffect(() => {
        if(selectedLocation){
            updateSelectedLocationToStorage(selectedLocation)
        }
    },[selectedLocation, setSelectedLocation])

    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
            <Analytics />
        </ThemeProvider>
    )
}

export default App