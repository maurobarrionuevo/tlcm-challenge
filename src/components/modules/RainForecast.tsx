import styled from "styled-components"
import WeatherModule from "../WeatherModule"
import { loader } from '../../maps/config'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import { getCurrentPrecipitationsMap } from '../../api/weather'

const RainForecast = () => {
    const mapRef = useRef(null)
    const { selectedLocation } = useContext(AppContext)

    const loadMaps = async (): Promise<void> => {
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
    }

    const forecastMap = async () => {
        const map = await getCurrentPrecipitationsMap()
        console.log(map)
        return map
    }

    useEffect(() => {
        if (loader) {
            loadMaps()
        }
    }, [])

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