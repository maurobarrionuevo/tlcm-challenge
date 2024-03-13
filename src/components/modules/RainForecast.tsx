import styled from "styled-components"
import WeatherModule from "../WeatherModule"
import { loader } from '../../maps/config'
import { useCallback, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext'

const RainForecast = () => {
    const mapRef = useRef(null)
    const { selectedLocation } = useContext(AppContext)

    const loadMaps = useCallback(async (): Promise<void> => {
        try {
            const position = { lat: selectedLocation?.lat, lng: selectedLocation?.lon }
            const { Map } = await loader.importLibrary('maps')
            if (mapRef.current) {
                new Map(mapRef.current as HTMLElement, {
                    zoom: 9,
                    center: position,
                    mapId: 'map',
                    disableDefaultUI: true,
                })
            }
        } catch (error) {
            console.log('Error', error)
        }
    }, [selectedLocation?.lat, selectedLocation?.lon])

    useEffect(() => {
        loadMaps()
    }, [loadMaps, selectedLocation])

    useEffect(() => {
        if (loader) {
            loadMaps()
        }
    }, [loadMaps])

    return (
        <WeatherModule
            className="rain-forecast"
            label={'Rain (Overlay not implemented yet)'}
            padding={false}
        >
            <RainForecastStyled>
                <div
                    className="hola"
                    id="map"
                    ref={mapRef}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                ></div>
            </RainForecastStyled>
        </WeatherModule>
    )
}

export default RainForecast

const RainForecastStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`