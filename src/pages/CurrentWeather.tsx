import { useContext, useEffect, useState } from "react"
import EmptyBlock from "../components/misc/EmptyBlock"
import ExtendedForecast from "../components/modules/ExtendedForecast"
import GenericModule from "../components/modules/GenericModule"
import HourlyForecast from "../components/modules/HourlyForecast"
import RainForecast from "../components/modules/RainForecast"
import AppLayout from "../layouts/AppLayout"
import { CurrentWeatherStyled } from "./CurrentWeatherStyled"
import { AppContext } from "../context/AppContext"
import LoadingPage from "./LoadingPage"
import { getCurrentWeather, getForecast } from "../api/weather"
import { ForecastResponse, DailyForecast, WeatherDataResponse, GroupedWeeklyForecast } from "../interfaces/api"
import MainData from "../components/modules/MainData"
import { convertEpochToTime, getTodayFromForecast, getWeekFromForecast, trimDecimal } from "../helpers/helpers"

const CurrentWeather = () => {

    const [loadingWeather, setLoadingWeather] = useState<boolean>(true)
    const [currentWeather, setCurrentWeather] = useState<WeatherDataResponse | undefined>(undefined)
    const [, setForecast] = useState<ForecastResponse | undefined>(undefined)
    const [weeklyForecast, setWeeklyForecast] = useState<GroupedWeeklyForecast | undefined>(undefined)
    const [todayForecast, setTodayForecast] = useState<DailyForecast[] | undefined>(undefined)
    const { ready, setReady, selectedLocation } = useContext(AppContext) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedLocation) {
                    const { lat, lon } = selectedLocation;
                    const weatherResponse = await getCurrentWeather(lat, lon);
                    const forecast = await getForecast(lat, lon)
                    setCurrentWeather(weatherResponse);
                    setForecast(forecast)
                    setTodayForecast(getTodayFromForecast(forecast))
                    setWeeklyForecast(getWeekFromForecast(forecast))
                }
            } catch (error) {
                console.error('Error getting current weather', error);
            } finally {
                setLoadingWeather(false)
            }
        };
    
        fetchData();
    },[selectedLocation,setReady])


    if(!ready || loadingWeather) return(
        <LoadingPage />
    )

    return (
        <AppLayout>
            {currentWeather && 
            <CurrentWeatherStyled>
                <MainData data={currentWeather} />
                {todayForecast && <HourlyForecast forecast={todayForecast}/>}
                <RainForecast />
                {weeklyForecast && <ExtendedForecast weeklyForecast={weeklyForecast}/>}
                <GenericModule name="Sunset" value={`${convertEpochToTime(currentWeather.sys.sunset)}`}/>
                <GenericModule name="Wind" value={`${trimDecimal(currentWeather.wind.speed * 3.6)} km/h`}/>
                <GenericModule name="Feels Like" value={`${currentWeather.main.feels_like}°`}/>
                <GenericModule name="Humidity" value={`${currentWeather?.main.humidity}%`}/>
                <GenericModule name="Visibility" value={`${currentWeather?.visibility / 100}m`}/>
                <GenericModule name="Pressure" value={`${currentWeather?.main.pressure} hPa`}/>
            </CurrentWeatherStyled>}
            {!currentWeather && 
            <EmptyBlock copy={"Ops! We couldn't get the weather for your location. Try again later."} />}
        </AppLayout>
    )
}

export default CurrentWeather