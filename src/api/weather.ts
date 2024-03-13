import Axios from 'axios';
import { CityData, ForecastResponse, WeatherDataResponse } from '../interfaces/api';

const { 
    VITE_OPENWEATHER_API_URL, 
    VITE_OPENWEATHER_API_KEY, 
    VITE_OPENWEATHER_MAP_API_URL, 
    VITE_OPENWEATHER_GEO_API_URL 
} = import.meta.env

export const WeatherApi = Axios.create({
    baseURL: VITE_OPENWEATHER_API_URL
})

export const MapApi = Axios.create({
    baseURL: VITE_OPENWEATHER_MAP_API_URL
})

export const GeoApi = Axios.create({
    baseURL: VITE_OPENWEATHER_GEO_API_URL
})

WeatherApi.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        appid: VITE_OPENWEATHER_API_KEY,
    };
    return config;
});

MapApi.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        appid: VITE_OPENWEATHER_API_KEY,
    };
    return config;
});

GeoApi.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        appid: VITE_OPENWEATHER_API_KEY,
    };
    return config;
});

export const getCurrentWeather = async (lat: GeolocationCoordinates['latitude'], lon: GeolocationCoordinates['longitude']) => {
    try {
        const res = await WeatherApi.get<WeatherDataResponse>(`/weather?lat=${lat}&lon=${lon}&units=metric`);
        return res.data;  // Return the actual weather data
    } catch (error) {
        console.error('Error getting current Weather', error);
        throw error;  // Re-throw the error to propagate it up the chain
    }
};

export const getForecast = async (lat: GeolocationCoordinates['latitude'], lon: GeolocationCoordinates['longitude']) => {
    try {
        const res = await WeatherApi.get<ForecastResponse>(`/forecast?lat=${lat}&lon=${lon}&units=metric`);
        return res.data;  // Return the actual weather data
    } catch (error) {
        console.error('Error getting current Weather', error);
        throw error;  // Re-throw the error to propagate it up the chain
    }
};

export const getCurrentPrecipitationsMap = async () => {
    try {
        const res = await MapApi.get(`/precipitation_new/1/1/1`);
        return res.data;  // Return the actual weather data
    } catch (error) {
        console.error('Error getting current precipitations map', error);
        throw error;  // Re-throw the error to propagate it up the chain
    }
};

export const getGeocoding = async (query: string) => {
    try {
        const res = await GeoApi.get<CityData[]>(`/direct?q=${query}&limit=5`);
        return res.data;  // Return the actual weather data
    } catch (error) {
        console.error('Error getting reverse geolocalization', error);
        throw error;  // Re-throw the error to propagate it up the chain
    }
}

export const getReverseGeocoding = async (lat: GeolocationCoordinates['latitude'], lon: GeolocationCoordinates['longitude']) => {
    try {
        const res = await GeoApi.get<CityData[]>(`/reverse?lat=${lat}&lon=${lon}&limit=1`);
        return res.data;  // Return the actual weather data
    } catch (error) {
        console.error('Error getting reverse geolocalization', error);
        throw error;  // Re-throw the error to propagate it up the chain
    }
}