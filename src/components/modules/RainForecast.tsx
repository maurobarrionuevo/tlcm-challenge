import styled from "styled-components"
import WeatherModule from "../WeatherModule"
import { loader } from '../../maps/config'
import { useCallback, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import { getCurrentPrecipitationsMap } from '../../api/weather'

const RainForecast = () => {
    const mapRef = useRef(null)
    const { selectedLocation } = useContext(AppContext)

    const loadMaps = useCallback(async (): Promise<void> => {
        try {
            console.log(loader)
            const position = { lat: selectedLocation?.lat, lng: selectedLocation?.lon }
            const { Map } = await loader.importLibrary('maps')
            if (mapRef.current) {
                const map = new Map(mapRef.current as HTMLElement, {
                    zoom: 9,
                    center: position,
                    mapId: 'map',
                    disableDefaultUI: true,
                })
                map.mapTypes.set('forecast', forecastMap)
            }
        } catch (error) {
            console.log('Error', error)
        }
    }, [selectedLocation?.lat, selectedLocation?.lon])

    const forecastMap = async () => {
        const map = await getCurrentPrecipitationsMap()
        console.log(map)
        return map
    }

    useEffect(() => {
        loadMaps()
    }, [loadMaps, selectedLocation])

    useEffect(() => {
        if (loader) {
            loadMaps()
        }
    }, [loadMaps])

    return (
        <WeatherModule className="rain-forecast" label={'Rain (Overlay not implemented yet)'}>
            <RainForecastStyled>
                <div
                    className="hola"
                    id="map"
                    ref={mapRef}
                    style={{ width: '100%', height: '300px' }}
                ></div>
            </RainForecastStyled>
        </WeatherModule>
    )
}

export default RainForecast

const RainForecastStyled = styled.div``